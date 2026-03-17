"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import AIAssistant from "./AI/AIAssistant";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";
import { BsStars } from "react-icons/bs";

const Split = dynamic(() => import("react-split"), { ssr: false });

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  // AI Integration States
  const [userCode, setUserCode] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const [isAiOpen, setIsAiOpen] = useState(false); // Controls the floating drawer

  return (
    <div className="bg-[var(--bg-primary)] transition-colors duration-300">
      <Split className="flex h-[calc(100vh-60px)]" minSize={0} sizes={[50, 50]}>
        {/* Left Side: Description */}
        <ProblemDescription problem={problem} _solved={solved} />

        {/* Right Side: Code Editor + Floating AI */}
        <div className="bg-[var(--bg-primary)] flex flex-col relative border-l border-[var(--border-color)] overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <Playground
              problem={problem}
              setSuccess={setSuccess}
              setSolved={setSolved}
              onCodeChange={(code: string) => setUserCode(code)}
              onLanguageChange={(lang: string) => setActiveLanguage(lang)}
            />
          </div>

          {/* --- AI FLOATING TRIGGER (The Logo) --- */}
          {!isAiOpen && (
            <button
              onClick={() => setIsAiOpen(true)}
              className="absolute bottom-24 right-6 z-30 group flex items-center gap-3 animate-bounce-slow"
            >
              {/* Tooltip on Hover */}
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg text-[10px] font-bold text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Stuck? Ask <span className="text-[var(--brand-orange)]">Mr. Code</span>
              </div>

              {/* The "M" Logo Button */}
              <div className="h-12 w-12 bg-[var(--brand-orange)] rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/10">
                <span className="text-white font-black text-xl">M</span>
                <BsStars className="absolute -top-1 -right-1 text-white animate-pulse" size={18} />
              </div>
            </button>
          )}

          {/* AI Assistant Drawer - Absolutely positioned at bottom of Playground */}
          {isAiOpen && (
            <div className="absolute bottom-0 left-0 w-full z-40 transform transition-transform duration-300 ease-out animate-slideUp">
              <AIAssistant
                currentCode={userCode}
                language={activeLanguage}
                problemTitle={problem.title}
                onClose={() => setIsAiOpen(false)} // Pass the close logic
              />
            </div>
          )}
        </div>
      </Split>

      {/* Celebration Confetti */}
      {success && (
        <Confetti
          gravity={0.3}
          tweenDuration={4000}
          width={width}
          height={height}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default Workspace;