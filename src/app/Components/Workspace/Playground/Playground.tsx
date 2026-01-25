// import React, { useState } from 'react';
// import PreferenceNav from './PreferenceNav/PreferenceNav';
// import Split from 'react-split';
// import CodeMirror from '@uiw/react-codemirror';
// import { vscodeDark } from '@uiw/codemirror-theme-vscode';
// import { javascript } from '@codemirror/lang-javascript';
// import EditorFooter from './EditorFooter';
// import { extname } from 'path';

// type PlaygroundProps = {};

// const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
//   const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
//   const boilerPlate = `function twosum(nums, target)
// {
//   };`;
//   return (
//     <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
//       <PreferenceNav />
//       <Split
//         className={problem.startCode}
//         direction="vertical"
//         sizes={[60, 40]}
//         minSize={60}
//       >
//         <div className="w-full overflow-auto">
//           <CodeMirror
//             value={boilerPlate}
//             theme={vscodeDark}
//             extensions={[javascript({ jsx: true })]}
//             style={{ fontSize: 16 }}
//           />
//         </div>
//         <div className="w-full px-5 overflow-auto py-4 space-y-6">
//           {/* TestCases Header & Buttons */}
//           <div className="space-y-4">
//             <div className="flex h-10 items-center space-x-6">
//               <div className="relative flex flex-col justify-center cursor-pointer">
//                 <div className="text-sm font-medium leading-5 text-white">TestCases</div>
//                 <hr className="absolute bottom-0 left-0 h-0.5 w-full rounded-full border-none bg-white" />
//               </div>
//             </div>

//             <div className="flex items-center space-x-2" key={example.id}
//             onClick={() => setActiveTestCaseId(index) }>
//               {problem.examples.map((example, index) => (
//                 <div className="mr-2 items-start mt-2 text-white">
//                   <div className={`flex flex-wrap items-center gap-y-4">
//                     <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
//                     hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
//                     ${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}>
//                       case {index + 1}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Input/Output Section */}
//             <div className="font-semibold space-y-3">
//               <p className="text-sm font-medium text-white">Input:</p>
//               <div className="w-full cursor-text rounded-lg border px-3 py-2.5 bg-dark-fill-3 border-transparent text-white">
//                 {problem.examples[activeTestCaseId].inputText}
//               </div>
//               <p className="text-sm font-medium text-white">Output:</p>
//               <div className="w-full cursor-text rounded-lg border px-3 py-2.5 bg-dark-fill-3 border-transparent text-white">
//                 {problem.examples[activeTestCaseId].outputText}
//               </div>
//             </div>
//           </div>
//       </Split>
//       <EditorFooter />
//     </div>
//   );
// };

// export default Playground;
// import React, { useState } from "react";
// import PreferenceNav from "./PreferenceNav/PreferenceNav";
// import Split from "react-split";
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { javascript } from "@codemirror/lang-javascript";
// import EditorFooter from "./EditorFooter";
// import { Problem } from "@/utils/types/problem";

// type PlaygroundProps = {
//   problem: Problem;
// };

// const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
//   const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);

//   const boilerPlate = `function twoSum(nums, target) {

// };`;

//   return (
//     <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
//       <PreferenceNav />

//       <Split direction="vertical" sizes={[60, 40]} minSize={60}>
//         <div className="w-full overflow-auto">
//           <CodeMirror
//             value={boilerPlate}
//             theme={vscodeDark}
//             extensions={[javascript({ jsx: true })]}
//             style={{ fontSize: 16 }}
//           />
//         </div>

//         <div className="w-full px-5 overflow-auto py-4 space-y-6">
//           <div className="flex items-center space-x-2">
//             {problem.examples.map((example: any, index: number) => (
//               <div
//                 key={example.id}
//                 onClick={() => setActiveTestCaseId(index)}
//                 className={`px-4 py-1 rounded-lg cursor-pointer ${
//                   activeTestCaseId === index
//                     ? "text-white bg-dark-fill-3"
//                     : "text-gray-500 bg-dark-fill-2"
//                 }`}
//               >
//                 case {index + 1}
//               </div>
//             ))}
//           </div>

//           <div className="space-y-3 text-white">
//             <p>Input:</p>
//             <div className="bg-dark-fill-3 p-2 rounded">
//               {problem.examples[activeTestCaseId].inputText}
//             </div>

//             <p>Output:</p>
//             <div className="bg-dark-fill-3 p-2 rounded">
//               {problem.examples[activeTestCaseId].outputText}
//             </div>
//           </div>
//         </div>
//       </Split>

//       <EditorFooter handleSubmit={() => {}} />
//     </div>
//   );
// };

// export default Playground;
import React, { useEffect, useState } from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/types/problem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { pid } from 'process';
import { useRouter } from 'next/router';
import { problems } from '@/mockProblems/problems';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

type PlaygroundProps = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground: React.FC<PlaygroundProps> = ({ problem,setSuccess,setSolved }) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  const [userCode,setUserCode] = useState<string>(problem.starterCode);
  const [user] = useAuthState(auth);
  const {query: {pid}} = useRouter();
  const handleSubmit = async () => {
    if(!user) {
      toast.error("Please login to submit your code",{
        position:"top-center",
        autoClose:3000,
        theme:"dark"
      })
      return
  }
  try{
    userCode = userCode.slice(userCode.indexOf(problem.starterCode));
    const cb = new Function(`return ${userCode}`)();
    const handler = problems[pid as string].handlerFunction;
    if(typeof handler === "function"){
      const success = handler(cb);
    }
    if(success){
      toast.success("Congrants! All tests passed!",{
        position:"top-center",
        autoClose:3000,
        theme:"dark"
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      },4000);
      const userRef = doc(firestore,"users",user.uid);
      await updateDoc(userRef,{ 
        solvedProblems: arrayUnion(pid),
      });
      setSolved(true);
    } 
  }catch(error: any){
    console.log(error.message);
    if(error.message.startswith("Error: AssertionError [ERR ASSERTION: Expected values to be strictly deep-equal:"))
    {
      toast.error("Oops! One or more test cases failed",{
        position:"top-center",
        autoClose:3000,
        theme:"dark",
      })
    }else{
      toast.error(error.message,{
        position:"top-center",
        autoClose:3000,
        theme:"dark",
      });
    }
  }
  }
  useEffect(() => {
    const code = localStorage.getItem(`code-${pid}`);
    if(user){
      setUserCode(code ? JSON.parse(code) : problem.starterCode);
    }
    else{ 
      setUserCode(problem.starterCode);
    }
  },[pid,user,problem.starterCode])
  const onchange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${pid}`,JSON.stringify(value));
  };
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        {/* Upper section: Code Editor */}
        <div className="w-full overflow-auto">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={onchange}
            extensions={[javascript({ jsx: true })]}
            style={{ fontSize: 16 }}
          />
        </div>

        {/* Lower section: Test Cases */}
        <div className="w-full px-5 overflow-auto py-4 space-y-6">
          <div className="space-y-4">
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex flex-col justify-center cursor-pointer">
                <div className="text-sm font-medium leading-5 text-white">TestCases</div>
                <hr className="absolute bottom-0 left-0 h-0.5 w-full rounded-full border-none bg-white" />
              </div>
            </div>

            {/* Test Case Selection Buttons */}
            <div className="flex items-center space-x-2">
              {problem.examples.map((example, index) => (
                <div 
                  key={example.id}
                  onClick={() => setActiveTestCaseId(index)}
                  className="mr-2 items-start mt-2 text-white"
                >
                  <div className="flex flex-wrap items-center gap-y-4">
                    <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                    hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                    ${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}>
                      case {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input/Output Display Section */}
            <div className="font-semibold space-y-3">
              <p className="text-sm font-medium text-white">Input:</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-2.5 bg-dark-fill-3 border-transparent text-white">
                {problem.examples[activeTestCaseId].inputText}
              </div>
              <p className="text-sm font-medium text-white">Output:</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-2.5 bg-dark-fill-3 border-transparent text-white">
                {problem.examples[activeTestCaseId].outputText}
              </div>
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter handleSubmit={handleSubmit}  />
    </div>
  );
};

export default Playground;

function setSuccess(arg: boolean) {
  throw new Error('Function not implemented.');
}
