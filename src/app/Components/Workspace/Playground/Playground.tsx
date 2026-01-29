// "use client";
// import { problemHandlers } from "@/utils/problems/handlers";
// import React, { useEffect, useState, useCallback } from "react";
// import dynamic from "next/dynamic";
// import PreferenceNav from "./PreferenceNav/PreferenceNav";
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { javascript } from "@codemirror/lang-javascript";
// import EditorFooter from "./EditorFooter";
// import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
// import { toast } from "react-toastify";
// import { problems } from "@/mockProblems/problems";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { useParams } from "next/navigation";

// // IMPORTANT: react-split must be dynamic in App Router
// const Split = dynamic(() => import("react-split"), { ssr: false });

// type PlaygroundProps = {
//   problem: Problem;
//   setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
//   setSolved: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export interface ISettings {
//   fontSize: string;
//   settingsModalIsOpen: boolean;
//   dropdownIsOpen: boolean;
// }

// const Playground: React.FC<PlaygroundProps> = ({
//   problem,
//   setSuccess,
//   setSolved,
// }) => {
//   const { pid } = useParams<{ pid: string }>();
//   const [user] = useAuthState(auth);

//   const [activeTestCaseId, setActiveTestCaseId] = useState(0);
//   const [userCode, setUserCode] = useState(problem.starterCode);

//   const [fontSize] = useLocalStorage("MR.C-fontSize", "16px");
//   const [settings, setSettings] = useState<ISettings>({
//     fontSize,
//     settingsModalIsOpen: false,
//     dropdownIsOpen: false,
//   });

//   /* ---------------- Code Editor Change ---------------- */
//   const onChange = useCallback(
//     (value: string) => {
//       setUserCode(value);
//       if (pid) {
//         localStorage.setItem(`code-${pid}`, JSON.stringify(value));
//       }
//     },
//     [pid]
//   );

//   /* ---------------- Load Saved Code ---------------- */
//   useEffect(() => {
//     if (!pid) return;
//     const saved = localStorage.getItem(`code-${pid}`);
//     setUserCode(saved ? JSON.parse(saved) : problem.starterCode);
//   }, [pid, problem.starterCode]);

//   /* ---------------- Sync Font Size ---------------- */
//   useEffect(() => {
//     setSettings((prev) => ({ ...prev, fontSize }));
//   }, [fontSize]);

//   /* ---------------- Submit Handler ---------------- */
//   const handleSubmit = async () => {
//     if (!user) {
//       toast.error("Please login to submit your code", {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "dark",
//       });
//       return;
//     }

//     if (!pid || !problemHandlers[pid]) {
//       toast.error("Invalid problem ID");
//       return;
//     }


//     const starterIndex = userCode.indexOf(problem.starterCode);
//     if (starterIndex === -1) {
//       toast.error("Do not remove the starter code", {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "dark",
//       });
//       return;
//     }

//     const solutionCode = userCode.slice(starterIndex);

//     let userFn: Function;
//     try {
//       userFn = new Function(`return ${solutionCode}`)();
//     } catch {
//       toast.error("Compilation error in your code", {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "dark",
//       });
//       return;
//     }

//     try {
//       const handler = problemHandlers[pid];
//       if (!handler) {
//         toast.error("No test handler found for this problem");
//         return;
//       }


//       const success = handler(userFn);

//       if (success) {
//         toast.success("Congratulations! All tests passed!", {
//           position: "top-center",
//           autoClose: 3000,
//           theme: "dark",
//         });

//         setSuccess(true);
//         setTimeout(() => setSuccess(false), 4000);

//         const userRef = doc(firestore, "users", user.uid);
//         await updateDoc(userRef, {
//           solvedProblems: arrayUnion(pid),
//         });

//         setSolved(true);
//       }
//     }
//     catch (error: any) {
//       if (
//         error.message?.startsWith("Error: AssertionError")
//       ) {
//         toast.error("Oops! One or more test cases failed", {
//           position: "top-center",
//           autoClose: 3000,
//           theme: "dark",
//         });
//       } else {
//         toast.error(error.message || "Runtime error", {
//           position: "top-center",
//           autoClose: 3000,
//           theme: "dark",
//         });
//       }
//     }
//   };

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="flex flex-col bg-dark-layer-1 relative h-full overflow-hidden">

//       <PreferenceNav settings={settings} setSettings={setSettings} />

//       <Split
//         className="h-[calc(100vh-94px)]"
//         direction="vertical"
//         sizes={[60, 40]}
//         minSize={60}
//       >
//         {/* Code Editor */}
//         <div className="w-full overflow-auto">
//           <CodeMirror
//             value={userCode}
//             theme={vscodeDark}
//             onChange={onChange}
//             extensions={[javascript({ jsx: true })]}
//             style={{ fontSize: settings.fontSize }}
//           />
//         </div>

//         {/* Test Cases */}
//         <div className="w-full px-5 overflow-auto py-4 space-y-6">
//           <div className="space-y-4">
//             <div className="flex h-10 items-center space-x-6">
//               <div className="relative flex flex-col justify-center cursor-pointer">
//                 <div className="text-sm font-medium text-white">TestCases</div>
//                 <hr className="absolute bottom-0 left-0 h-0.5 w-full bg-white" />
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {problem.examples.map((example, index) => (
//                 <div
//                   key={example.id}
//                   onClick={() => setActiveTestCaseId(index)}
//                   className={`px-4 py-1 rounded-lg cursor-pointer transition-all ${activeTestCaseId === index
//                     ? "text-white bg-dark-fill-3"
//                     : "text-gray-500 bg-dark-fill-2"
//                     }`}
//                 >
//                   case {index + 1}
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-3 text-white">
//               <p>Input:</p>
//               <div className="bg-dark-fill-3 p-2 rounded">
//                 {problem.examples[activeTestCaseId]?.inputText}
//               </div>

//               <p>Output:</p>
//               <div className="bg-dark-fill-3 p-2 rounded">
//                 {problem.examples[activeTestCaseId]?.outputText}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Split>

//       <EditorFooter handleSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default Playground;
"use client";

import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { problemHandlers } from "@/utils/problems/handlers";
import { Problem } from "@/utils/types/problem";
import { auth, firestore } from "@/firebase/firebase";
import useLocalStorage from "@/hooks/useLocalStorage";

import PreferenceNav from "./PreferenceNav/PreferenceNav";
import EditorFooter from "./EditorFooter";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

// react-split must be dynamic in App Router
const Split = dynamic(() => import("react-split"), { ssr: false });

type PlaygroundProps = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
  fontSize: string;
  settingsModalIsOpen: boolean;
  dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({
  problem,
  setSuccess,
  setSolved,
}) => {
  const { pid } = useParams<{ pid: string }>();
  const [user] = useAuthState(auth);

  const [activeTestCaseId, setActiveTestCaseId] = useState(0);
  const [userCode, setUserCode] = useState(problem.starterCode);

  const [fontSize] = useLocalStorage("MR.C-fontSize", "16px");
  const [settings, setSettings] = useState<ISettings>({
    fontSize,
    settingsModalIsOpen: false,
    dropdownIsOpen: false,
  });

  /* ---------------- Code Editor Change ---------------- */
  const onChange = useCallback(
    (value: string) => {
      setUserCode(value);
      if (pid) {
        localStorage.setItem(`code-${pid}`, JSON.stringify(value));
      }
    },
    [pid]
  );

  /* ---------------- Load Saved Code ---------------- */
  useEffect(() => {
    if (!pid) return;
    const saved = localStorage.getItem(`code-${pid}`);
    setUserCode(saved ? JSON.parse(saved) : problem.starterCode);
  }, [pid, problem.starterCode]);

  /* ---------------- Sync Font Size ---------------- */
  useEffect(() => {
    setSettings((prev) => ({ ...prev, fontSize }));
  }, [fontSize]);

  /* ---------------- Submit Handler ---------------- */
  const handleSubmit = async () => {
    if (!user) {
      toast.error("Please login to submit your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    if (!pid || !problemHandlers[pid]) {
      toast.error("Invalid problem ID", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const starterIndex = userCode.indexOf(problem.starterFunctionName);
    if (starterIndex === -1) {
      toast.error("Do not remove the starter function", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const solutionCode = userCode.slice(starterIndex);

    let userFn: Function;
    try {
      userFn = new Function(`return ${solutionCode}`)();
    } catch {
      toast.error("Compilation error in your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    try {
      const handler = problemHandlers[pid];
      const success = handler(userFn);

      if (success) {
        toast.success("Congratulations! All tests passed!", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });

        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);

        const userRef = doc(firestore, "users", user.uid);
        await updateDoc(userRef, {
          solvedProblems: arrayUnion(pid),
        });

        setSolved(true);
      }
    } catch (error: any) {
      if (error.message?.includes("AssertionError")) {
        toast.error("Oops! One or more test cases failed", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error(error.message || "Runtime error", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex flex-col bg-dark-layer-1 relative h-full overflow-hidden">
      <PreferenceNav settings={settings} setSettings={setSettings} />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        {/* Code Editor */}
        <div className="w-full overflow-auto">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={onChange}
            extensions={[javascript({ jsx: true })]}
            style={{ fontSize: settings.fontSize }}
          />
        </div>

        {/* Test Cases */}
        <div className="w-full px-5 overflow-auto py-4 space-y-6">
          <div className="space-y-4">
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex flex-col justify-center cursor-pointer">
                <div className="text-sm font-medium text-white">TestCases</div>
                <hr className="absolute bottom-0 left-0 h-0.5 w-full bg-white" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {problem.examples.map((example, index) => (
                <div
                  key={example.id}
                  onClick={() => setActiveTestCaseId(index)}
                  className={`px-4 py-1 rounded-lg cursor-pointer transition-all ${
                    activeTestCaseId === index
                      ? "text-white bg-dark-fill-3"
                      : "text-gray-500 bg-dark-fill-2"
                  }`}
                >
                  case {index + 1}
                </div>
              ))}
            </div>

            <div className="space-y-3 text-white">
              <p>Input:</p>
              <div className="bg-dark-fill-3 p-2 rounded">
                {problem.examples[activeTestCaseId]?.inputText}
              </div>

              <p>Output:</p>
              <div className="bg-dark-fill-3 p-2 rounded">
                {problem.examples[activeTestCaseId]?.outputText}
              </div>
            </div>
          </div>
        </div>
      </Split>

      <EditorFooter handleSubmit={handleSubmit} />
    </div>
  );
};

export default Playground;
