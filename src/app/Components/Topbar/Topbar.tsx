// "use client";
// import { auth } from "@/firebase/firebase";
// import Link from "next/link";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import Logout from "../Buttons/Logout";
// import { useAuthModal } from "@/store/useAuthModal";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { BsList } from "react-icons/bs";
// import Timer from "../Timer/Timer";
// import { useRouter } from "next/router";
// import { problems } from "@/utils/problems";
// import { Problem } from "@/mockProblems/problems";

// type TopbarProps = {
//   problemPage?: boolean;
// };

// const Topbar: React.FC<TopbarProps> = ({ problemPage = false }) => {  // Fixed: default false + destructuring
//   const [user] = useAuthState(auth);
//   const openModal = useAuthModal((state) => state.openModal);
//   const router = useRouter();
//   const handleProblemChange = (isForward: boolean) => {
//     const { order } = problems[router.query.pid as string] as unknown as Problem;
//     const direction = isForward ? 1 : -1;
//     const nextProblemOrder = order + direction; 
//     const nextProblemKey = Object.keys(problems).find(key => problems[key].order === nextProblemOrder);
//     console.log(nextProblemKey);
//     if(isForward &&  !nextProblemKey){
//       const firstProblemKey = Object.keys(problems).find(key => problems[key].order === 1 );
//       router.push(`/problems/${firstProblemKey}`);
//     }
//     else if(!isForward && !nextProblemKey){
//       const lastProblemKey = Object.keys(problems).find((key) => problems[key].order === Object.keys(problems).length);
//       router.push(`/problems/${lastProblemKey}`);
//     }
//     else{
//       router.push(`/problems/${nextProblemKey}`);
//     }
//   }
//   return (
//     <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
//       <div
//         className={`flex w-full items-center justify-between ${problemPage ? 'max-w-[1200px] mx-auto' : ''}`}
//       >
//         <Link href="/" className="h-[22px] flex-1">
//           <img src="/logo-full.png" alt="Logo" className="h-full" />
//         </Link>
        
//         {problemPage && (
//           <div className="flex items-center gap-4 flex-1 justify-center">
//             <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
//             onClick={() => handleProblemChange(false)}>
//               <FaChevronLeft />
//             </div>
//             <Link href="/" className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer">
//               <div>
//                 <BsList />
//               </div>
//               <p>Problem List</p>
//             </Link>
//             <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-3 h-8 w-8 cursor-pointer"
//             onClick={() => handleProblemChange(true)}>
//               <FaChevronRight />
//             </div>
//           </div>
//         )}
        
//         <div className="flex items-center space-x-4 flex-1 justify-end">
//           <div>
//             <a
//               href="https://www.buymeacoffee.com/burakorkmezz"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
//             >
//               Premium
//             </a>
//           </div>
          
//           {!user && (
//             <Link href="/auth" onClick={() => openModal("login")}>
//               <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded">Sign In</button>
//             </Link>
//           )}
          
//           {/* Fixed: Only shows when problemPage is explicitly true */}
//           {problemPage === true && <Timer />}
          
//           {user && (
//             <div className="cursor-pointer group relative">
//               <img
//                 src="/avatar.png"
//                 alt="user profile img"
//                 className="h-8 w-8 rounded-full"
//               />
//               <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
//                 <p className="text-sm">{user.email}</p>
//               </div>
//             </div>
//           )}
          
//           {user && <Logout />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;
// "use client";
// import { auth } from "@/firebase/firebase";
// import Link from "next/link";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import Logout from "../Buttons/Logout";
// import { useAuthModal } from "@/store/useAuthModal";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { BsList } from "react-icons/bs";
// import Timer from "../Timer/Timer";
// import { useRouter, useParams } from "next/navigation"; // Added for navigation
// import { problems } from "@/utils/problems"; // Added to access problem order

// type TopbarProps = {
//   problemPage?: boolean;
// };

// const Topbar: React.FC<TopbarProps> = ({ problemPage = false }) => {
//   const [user] = useAuthState(auth);
//   const openModal = useAuthModal((state) => state.openModal);
//   const router = useRouter();
//   const { pid } = useParams(); // Gets 'two-sum' or 'jump-game' from the URL

//   const handleProblemChange = (isNext: boolean) => {
//     // 1. Get current problem metadata
//     const currentProblem = problems[pid as string];
//     if (!currentProblem) return;

//     // 2. Calculate the target order (e.g., if current is 1, next is 2)
//     const targetOrder = isNext ? currentProblem.order + 1 : currentProblem.order - 1;

//     // 3. Find the key/slug of the problem that has that order number
//     const nextProblemKey = Object.keys(problems).find(
//       (key) => problems[key].order === targetOrder
//     );

//     // 4. Navigate if it exists
//     if (nextProblemKey) {
//       router.push(`/problems/${nextProblemKey}`);
//     }
//   };

//   return (
//     <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
//       <div
//         className={`flex w-full items-center justify-between ${problemPage ? 'max-w-[1200px] mx-auto' : ''}`}
//       >
//         <Link href="/" className="h-[22px] flex-1">
//           <img src="/logo-full.png" alt="Logo" className="h-full" />
//         </Link>
        
//         {problemPage && (
//           <div className="flex items-center gap-4 flex-1 justify-center">
//             {/* CORRECTED: Added onClick for Left Arrow */}
//             <div 
//               className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
//               onClick={() => handleProblemChange(false)}
//             >
//               <FaChevronLeft />
//             </div>
//             <Link href="/" className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer">
//               <div>
//                 <BsList />
//               </div>
//               <p>Problem List</p>
//             </Link>
//             {/* CORRECTED: Added onClick for Right Arrow */}
//             <div 
//               className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
//               onClick={() => handleProblemChange(true)}
//             >
//               <FaChevronRight />
//             </div>
//           </div>
//         )}
        
//         <div className="flex items-center space-x-4 flex-1 justify-end">
//           <div>
//             <a
//               href="https://www.buymeacoffee.com/burakorkmezz"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
//             >
//               Premium
//             </a>
//           </div>
          
//           {!user && (
//             <Link href="/auth" onClick={() => openModal("login")}>
//               <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded">Sign In</button>
//             </Link>
//           )}
          
//           {user && problemPage  && <Timer />}
          
//           {user && (
//             <div className="cursor-pointer group relative">
//               <img
//                 src="/avatar.png"
//                 alt="user profile img"
//                 className="h-8 w-8 rounded-full"
//               />
//               <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
//                 <p className="text-sm">{user.email}</p>
//               </div>
//             </div>
//           )}
          
//           {user && <Logout />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;
"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { auth } from "@/firebase/firebase";
import Logout from "../Buttons/Logout";
import Timer from "../Timer/Timer";
import { useAuthModal } from "@/store/useAuthModal";
import { problems } from "@/utils/problems";
import { Problem } from "@/mockProblems/problems";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage = false }) => {
  const [user] = useAuthState(auth);
  const openModal = useAuthModal((state) => state.openModal);

  const router = useRouter();
  const params = useParams();
  const pid = params?.pid as string;

  const handleProblemChange = (isForward: boolean) => {
    if (!pid) return;

    const { order } = problems[pid] as unknown as  Problem;
    const direction = isForward ? 1 : -1;
    const nextOrder = order + direction;

    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } 
    else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } 
    else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="relative flex h-[50px] w-full items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between ${
          problemPage ? "max-w-[1200px] mx-auto" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="Logo" className="h-full" />
        </Link>

        {/* Problem Navigation */}
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8"
            >
              <BsList />
              <p>Problem List</p>
            </Link>

            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <a
            href="https://www.buymeacoffee.com/burakorkmezz"
            target="_blank"
            rel="noreferrer"
            className="bg-dark-fill-3 py-1.5 px-3 rounded text-brand-orange hover:bg-dark-fill-2"
          >
            Premium
          </a>

          {!user && (
            <button
              onClick={() => openModal("login")}
              className="bg-dark-fill-3 py-1 px-2 rounded"
            >
              Sign In
            </button>
          )}

          {problemPage && <Timer />}

          {user && (
            <div className="relative group cursor-pointer">
              <img
                src="/avatar.png"
                alt="profile"
                className="h-8 w-8 rounded-full"
              />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg scale-0 group-hover:scale-100 transition-all">
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}

          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
