"use client";

import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { problemHandlers } from "@/utils/problems/handlers";
import { Problem, Example } from "@/utils/types/problem";
import { problemDrivers } from "@/utils/types/drivers";
import { auth, firestore } from "@/firebase/firebase";
import useLocalStorage from "@/hooks/useLocalStorage";
import { executeCode } from "@/utils/api/executeCode";

import PreferenceNav from "./PreferenceNav/PreferenceNav";
import EditorFooter from "./EditorFooter";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { EditorView } from "@codemirror/view";

const Split = dynamic(() => import("react-split"), { ssr: false });

// Helper: Data Structure Definitions
const listNodeDef = {
  python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n`,
  cpp: `struct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n`,
};

const treeNodeDef = {
  python: `class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n`,
  cpp: `struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n`,
};

type PlaygroundProps = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
  // NEW PROPS FOR AI INTEGRATION
  onCodeChange: (code: string) => void;
  onLanguageChange: (lang: string) => void;
};

export interface ISettings {
  fontSize: string;
  settingsModalIsOpen: boolean;
  dropdownIsOpen: boolean;
  tabSize?: string;
  wordWrap?: string;
}

const Playground: React.FC<PlaygroundProps> = ({
  problem,
  setSuccess,
  setSolved,
  onCodeChange,
  onLanguageChange
}) => {
  const { pid } = useParams<{ pid: string }>();
  const [user] = useAuthState(auth);
  const [activeTestCaseId, setActiveTestCaseId] = useState(0);
  const [language, setLanguage] = useLocalStorage("lcc-language", "javascript");

  const getStarterCode = useCallback((lang: string) => {
    if (typeof problem.starterCode === "string") return problem.starterCode;
    return (problem.starterCode as any)[lang] || "";
  }, [problem.starterCode]);

  const [userCode, setUserCode] = useState<string>(getStarterCode(language));
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const [fontSize] = useLocalStorage("lcc-fontSize", "16px");
  const [tabSize] = useLocalStorage("lcc-tabSize", "4 spaces");
  const [wordWrap] = useLocalStorage("lcc-wordWrap", "Off");

  const [settings, setSettings] = useState<ISettings>({
    fontSize, tabSize, wordWrap,
    settingsModalIsOpen: false,
    dropdownIsOpen: false,
  });

  const getLanguageExtension = () => {
    switch (language) {
      case "python": return python();
      case "cpp": case "c": return cpp();
      case "java": return java();
      default: return javascript({ jsx: true });
    }
  };

  // Notify parent of code changes
  const onChange = useCallback((value: string) => {
    setUserCode(value);
    onCodeChange(value); // Sync with Workspace/AI
    if (pid) localStorage.setItem(`code-${pid}-${language}`, JSON.stringify(value));
  }, [pid, language, onCodeChange]);

  // Notify parent when language changes
  useEffect(() => {
    onLanguageChange(language);
  }, [language, onLanguageChange]);

  useEffect(() => {
    if (!pid) return;
    const saved = localStorage.getItem(`code-${pid}-${language}`);
    const initialCode = saved ? JSON.parse(saved) : getStarterCode(language);
    setUserCode(initialCode);
    onCodeChange(initialCode); // Sync initial code load
  }, [pid, language, getStarterCode, onCodeChange]);

  useEffect(() => {
    setSettings((prev) => ({ ...prev, fontSize, tabSize, wordWrap }));
  }, [fontSize, tabSize, wordWrap]);

// 1. Unified Headers for all remote languages
const LANGUAGE_HEADERS: Record<string, string> = {
  cpp: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n`,
  c: `#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n`,
  java: `import java.util.*;\n`,
  python: `from typing import List, Optional\nimport json\n`,
};

// ... inside your Playground component ...

const handleSubmit = async () => {
  if (!user) return toast.error("Please login to submit", { theme: "dark" });
  setIsExecuting(true);
  setOutput(null);
  try {
    if (language === "javascript") {
      // --- LOCAL JAVASCRIPT EXECUTION ---
      // We append a return statement so the function can be extracted regardless of how it's declared
      const runCode = `${userCode}; return ${problem.starterFunctionName};`;
      const userFn = new Function(runCode)();
      if (typeof userFn !== "function") {
         throw new Error("Starter function not found");
      }
      const success = problemHandlers[pid](userFn);
      if (success) {
        handleSuccess();
      } else {
        toast.error("Oops! Test case failed", { theme: "dark" });
      }
    } else {
      // --- REMOTE EXECUTION (C, C++, Java, Python) ---
      const header = LANGUAGE_HEADERS[language] || "";
      const driver = problemDrivers[pid]?.[language] || "";
      // Constructing final code: Headers + User Code + Test Driver
      const finalCode = `${header}\n${userCode}\n${driver}`;
      const result = await executeCode(language, finalCode);
      // Handle Compilation/Runtime errors from the API
      if (!result || result.run.code !== 0) {
        const errorMsg = result?.run?.stderr || result?.run?.stdout || "Execution failed";
        setOutput(`Error:\n${errorMsg}`);
        toast.error("Compilation/Runtime Error", { theme: "dark" });
      } else {
        const stdout = result.run.stdout.trim();
        setOutput(stdout);
        // Standardized comparison: lowercase and remove all whitespace
        const actual = stdout.toLowerCase().replace(/\s/g, "");
        const expected = problem.examples[0].outputText.toLowerCase().replace(/\s/g, "");
        if (actual === expected) {
          handleSuccess();
        } else {
          toast.error("Output mismatch", { theme: "dark" });
        }
      }
    }
  } catch (error: any) {
    console.error("Submission Error:", error);
    // Dynamic toast based on the error type
    toast.error(error.message || "Execution Error", { theme: "dark" });
  } finally {
    setIsExecuting(false);
  }
};

  const handleSuccess = async () => {
    toast.success("All tests passed!", { theme: "dark" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    if (user && pid) {
      await updateDoc(doc(firestore, "users", user.uid), { solvedProblems: arrayUnion(pid) });
      setSolved(true);
    }
  };

  const numericTabSize = parseInt(settings.tabSize?.split(" ")[0] || "4");

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] h-full overflow-hidden">
      <PreferenceNav settings={settings} setSettings={setSettings} language={language} setLanguage={setLanguage} />

      <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
        <div className="w-full h-full overflow-auto bg-[var(--bg-secondary)]">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={onChange}
            extensions={[getLanguageExtension(), ...(settings.wordWrap === "On" ? [EditorView.lineWrapping] : [])]}
            style={{ fontSize: settings.fontSize }}
            basicSetup={{ tabSize: numericTabSize }}
          />
        </div>

        <div className="w-full h-full px-5 py-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)] overflow-auto pb-24">
          <div className="flex h-10 items-center">
            <div className="text-sm font-bold text-[var(--text-primary)] border-b-2 border-[var(--brand-orange)] pb-1">
              Test Cases
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {problem.examples.map((example: Example, index: number) => (
              <button
                key={example.id}
                onClick={() => setActiveTestCaseId(index)}
                className={`px-5 py-1.5 rounded-xl text-sm font-semibold transition-all ${activeTestCaseId === index
                  ? "text-[var(--brand-orange)] bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/50"
                  : "text-[var(--text-secondary)] bg-[var(--bg-accent)] border border-[var(--border-color)]"
                  }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>

          <div className="space-y-5 mt-6">
            <div>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">Input:</p>
              <div className="bg-[var(--bg-accent)] p-4 rounded-xl text-[var(--text-primary)] font-mono text-sm">
                {problem.examples[activeTestCaseId]?.inputText}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">Expected Output:</p>
              <div className="bg-[var(--bg-accent)] p-4 rounded-xl text-[var(--text-primary)] font-mono text-sm">
                {problem.examples[activeTestCaseId]?.outputText}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-sm font-bold text-[var(--text-primary)] border-b-2 border-[var(--brand-orange)] w-fit pb-1">
              Console Output
            </div>
            <div className={`mt-4 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap ${output?.includes("Error") ? "bg-rose-500/10 text-rose-500" : "bg-[var(--bg-accent)] text-[var(--text-primary)]"}`}>
              {isExecuting ? <span className="animate-pulse text-[var(--brand-orange)]">Executing...</span> : output || "Submit to see results."}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter handleSubmit={handleSubmit} />
    </div>
  );
};

export default Playground;
