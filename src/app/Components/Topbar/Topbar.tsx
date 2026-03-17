
// "use client";

// import React from "react";
// import Link from "next/link";
// import { useRouter, useParams } from "next/navigation";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { BsList } from "react-icons/bs";
// import { auth } from "@/firebase/firebase";
// import Logout from "../Buttons/Logout";
// import Timer from "../Timer/Timer";
// import ThemeToggle from "../ThemeToggle";
// import { useAuthModal } from "@/store/useAuthModal";
// import { problems } from "@/utils/problems";
// import { Problem } from "@/mockProblems/problems";

// type TopbarProps = {
//   problemPage?: boolean;
// };

// const Topbar: React.FC<TopbarProps> = ({ problemPage = false }) => {
//   const [user] = useAuthState(auth);
//   const openModal = useAuthModal((s) => s.openModal);
//   const router = useRouter();
//   const params = useParams();
//   const pid = params?.pid as string;

//   /* ---------------- Problem Navigation ---------------- */
//   const handleProblemChange = (isForward: boolean) => {
//     if (!pid) return;

//     const { order } = problems[pid] as unknown as Problem;
//     const direction = isForward ? 1 : -1;

//     const totalProblems = Object.keys(problems).length;

//     let nextOrder = order + direction;

//     // ✅ If forward and exceeds max → go to 1
//     if (nextOrder > totalProblems) {
//       nextOrder = 1;
//     }

//     // ✅ If backward and goes below 1 → go to last
//     if (nextOrder < 1) {
//       nextOrder = totalProblems;
//     }

//     const nextProblemKey = Object.keys(problems).find(
//       (key) => problems[key].order === nextOrder
//     );

//     if (nextProblemKey) {
//       router.push(`/problems/${nextProblemKey}`);
//     }
//   };

//   /* ---------------- AUTH NAVIGATION ---------------- */
//   const handleLogin = () => {
//     router.push("/auth");   // ✅ important for your setup
//     openModal("login");     // ✅ open modal
//   };

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-3 sm:px-8">
//       <div className="flex items-center justify-between max-w-7xl mx-auto h-full">

//         {/* Brand Logo */}
//         <Link href="/" className="flex items-center gap-2.5 group shrink-0">
//           <div className="h-9 w-9 bg-[var(--brand-orange)] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
//             <span className="text-white font-black text-xl">M</span>
//           </div>
//           <div className="hidden md:block">
//             <span className="text-[var(--brand-orange)] font-bold text-xl">Mr.</span>
//             <span className="text-[var(--text-primary)] font-semibold text-xl ml-1">Code</span>
//           </div>
//         </Link>

//         {/* Navigation Controls (Problem Page Only) */}
//         {problemPage && (
//           <div className='flex items-center gap-3 flex-1 justify-center px-4'>
//             <button
//               onClick={() => handleProblemChange(false)}
//               className='flex items-center justify-center p-2 rounded-lg bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors'
//             >
//               <FaChevronLeft size={14} />
//             </button>
//             <Link
//               href='/'
//               className='flex items-center gap-2 font-medium text-[var(--text-secondary)] hover:text-[var(--brand-orange)] whitespace-nowrap transition-colors'
//             >
//               <BsList size={18} />
//               <span className="hidden sm:inline">Problem List</span>
//             </Link>
//             <button
//               onClick={() => handleProblemChange(true)}
//               className='flex items-center justify-center p-2 rounded-lg bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors'
//             >
//               <FaChevronRight size={14} />
//             </button>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3 sm:gap-5 shrink-0">

//           <ThemeToggle />

//           <a
//             href="https://www.buymeacoffee.com/burakorkmezz"
//             target="_blank"
//             rel="noreferrer"
//             className="hidden lg:inline-flex rounded-lg bg-[var(--bg-accent)] px-3 py-1.5 text-sm font-medium text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white transition-all duration-300 ease-in-out"
//           >
//             Premium
//           </a>

//           {/* ✅ SIGN IN */}
//           {!user && (
//             <button
//               onClick={handleLogin}
//               className="inline-flex rounded-xl bg-[var(--brand-orange)] px-5 py-2 text-sm font-bold text-white shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300"
//             >
//               Sign In
//             </button>
//           )}

//           {/* TIMER */}
//           {problemPage && user && <Timer />}

//           {/* ✅ PROFILE + LOGOUT */}
//           {user && (
//             <div className="flex items-center gap-3">
//               <div className="relative group cursor-pointer">
//                 <div className="h-9 w-9 rounded-full border-2 border-[var(--brand-orange)] overflow-hidden">
//                   <img
//                     src="/avatar.png"
//                     alt="profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Hover Tooltip */}
//                 <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-lg shadow-xl scale-0 group-hover:scale-100 transition-all duration-200 z-50 min-w-max">
//                   <p className="text-sm font-medium">{user.email}</p>
//                 </div>
//               </div>

//               <Logout />
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList, BsCodeSlash, BsFileText } from "react-icons/bs";
import { auth } from "@/firebase/firebase";
import Logout from "../Buttons/Logout";
import Timer from "../Timer/Timer";
import ThemeToggle from "../ThemeToggle";
import { useAuthModal } from "@/store/useAuthModal";
import { problems } from "@/utils/problems";
import { Problem } from "@/mockProblems/problems";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage = false }) => {
  const [user] = useAuthState(auth);
  const openModal = useAuthModal((s: { openModal: any; }) => s.openModal);
  const router = useRouter();
  const params = useParams();
  const pid = params?.pid as string;

  // Track if we are on a docs page to handle SSR vs Client mismatch
  const [isDocsPage, setIsDocsPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDocsPage(window.location.pathname.endsWith("/docs"));
    }
  }, [pid]);
  /* ---------------- Problem Navigation ---------------- */
  const handleProblemChange = (isForward: boolean) => {
    // 1. Safety Check: If pid is missing or problems aren't loaded, stop here
    if (!pid || !problems || !problems[pid]) {
      console.error("Problem data not found for pid:", pid);
      return;
    }

    const problemData = problems[pid] as unknown as Problem;
    const { order } = problemData;
    const direction = isForward ? 1 : -1;
    const totalProblems = Object.keys(problems).length;

    let nextOrder = order + direction;

    // Loop through the problem list
    if (nextOrder > totalProblems) nextOrder = 1;
    if (nextOrder < 1) nextOrder = totalProblems;

    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextOrder
    );

    if (nextProblemKey) {
      const targetPath = isDocsPage
        ? `/problems/${nextProblemKey}/docs`
        : `/problems/${nextProblemKey}`;

      router.push(targetPath);
    }
  };

  /* ---------------- AUTH NAVIGATION ---------------- */
  const handleLogin = () => {
    router.push("/auth");
    openModal("login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-3 sm:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="h-9 w-9 bg-[var(--brand-orange)] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-xl">M</span>
          </div>
          <div className="hidden md:block">
            <span className="text-[var(--brand-orange)] font-bold text-xl">Mr.</span>
            <span className="text-[var(--text-primary)] font-semibold text-xl ml-1">Code</span>
          </div>
        </Link>

        {/* Navigation Controls (Problem Page Only) */}
        {problemPage && (
          <div className='flex items-center gap-2 sm:gap-4 flex-1 justify-center px-2'>
            {/* Previous Problem */}
            <button
              onClick={() => handleProblemChange(false)}
              className='flex items-center justify-center p-2 rounded-lg bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors'
            >
              <FaChevronLeft size={14} />
            </button>

            {/* View Toggle (Docs vs Code) */}
            <Link
              href={isDocsPage ? `/problems/${pid}` : `/problems/${pid}/docs`}
              className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-accent)] font-medium text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors border border-transparent hover:border-[var(--brand-orange)]/30'
            >
              {isDocsPage ? <BsCodeSlash size={18} /> : <BsFileText size={18} />}
              <span className="hidden md:inline text-sm">
                {isDocsPage ? "Editor" : "Explanations"}
              </span>
            </Link>

            {/* Problem List */}
            <Link
              href='/'
              className='flex items-center justify-center p-2 rounded-lg bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors'
            >
              <BsList size={18} />

            </Link>

            {/* Next Problem */}
            <button
              onClick={() => handleProblemChange(true)}
              className='flex items-center justify-center p-2 rounded-lg bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors'
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <ThemeToggle />

          <a
            href="https://www.buymeacoffee.com"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex rounded-lg bg-[var(--bg-accent)] px-3 py-1.5 text-sm font-medium text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white transition-all duration-300"
          >
            Premium
          </a>

          {!user && (
            <button
              onClick={handleLogin}
              className="inline-flex rounded-xl bg-[var(--brand-orange)] px-5 py-2 text-sm font-bold text-white shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300"
            >
              Sign In
            </button>
          )}

          {problemPage && user && <Timer />}

          {user && (
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <div className="h-9 w-9 rounded-full border-2 border-[var(--brand-orange)] overflow-hidden">
                  <img src="/avatar.png" alt="profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-lg shadow-xl scale-0 group-hover:scale-100 transition-all duration-200 z-50 min-w-max">
                  <p className="text-sm font-medium">{user.email}</p>
                </div>
              </div>
              <Logout />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;