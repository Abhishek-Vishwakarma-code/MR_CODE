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
//     const nextOrder = order + direction;

//     const nextProblemKey = Object.keys(problems).find(
//       (key) => problems[key].order === nextOrder
//     );

//     if (nextProblemKey) {
//       router.push(`/problems/${nextProblemKey}`);
//     }
//   };

//   /* ---------------- AUTH NAVIGATION (WORKING) ---------------- */
//   const handleLogin = () => {
//     router.push("/auth");   // ✅ important for your setup
//     openModal("login");     // ✅ open modal
//   };

//   return (
//     <nav className="relative z-50 h-[50px] w-full bg-dark-layer-1 px-5">
//       <div className="flex h-full w-full items-center justify-between max-w-[1200px] mx-auto">

//         {/* Logo */}
//         <Link href="/" className="flex items-center h-10 shrink-0">
//           {/* <img src="/gpt.png" alt="Logo" className="h-100 w-100 object-contain mt-30" /> */}

//         </Link>

//         {/* Problem Navigation */}
//         {problemPage && (
//           <div className="flex items-center gap-4">
//             <button onClick={() => handleProblemChange(false)}>
//               <FaChevronLeft />
//             </button>

//             <Link href="/" className="flex items-center gap-2">
//               <BsList />
//               <span>Problem List</span>
//             </Link>

//             <button onClick={() => handleProblemChange(true)}>
//               <FaChevronRight />
//             </button>
//           </div>
//         )}

//         {/* Right Section */}
//         <div className="flex items-center gap-5 shrink-0">

//           <a
//             href="https://www.buymeacoffee.com/burakorkmezz"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex rounded bg-dark-fill-3 px-3 py-1.5 text-brand-orange hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
//           >
//             Premium
//           </a>

//           {/* ✅ SIGN IN */}
//           {!user && (
//             <button
//               onClick={handleLogin}
//               className="inline-flex rounded bg-brand-orange px-3 py-1.5 text-white hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
//             >
//               Sign In
//             </button>
//           )}

//           {problemPage && <Timer />}

//           {/* ✅ PROFILE + LOGOUT */}
//           {user && (
//             <>
//               <div className="relative group cursor-pointer">
//                 <img
//                   src="/avatar.png"
//                   alt="profile"
//                   className="h-8 w-8 rounded-full"
//                 />

//                 <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-dark-layer-1 text-brand-orange px-3 py-1 rounded shadow-lg scale-0 group-hover:scale-100 transition-all duration-200">
//                   <p className="text-sm">{user.email}</p>
//                 </div>
//               </div>

//               <Logout />
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;
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
//     const nextOrder = order + direction;

//     const nextProblemKey = Object.keys(problems).find(
//       (key) => problems[key].order === nextOrder
//     );

//     if (nextProblemKey) {
//       router.push(`/problems/${nextProblemKey}`);
//     }
//   };

//   /* ---------------- AUTH NAVIGATION ---------------- */
//   const handleLogin = () => {
//     router.push("/auth");
//     openModal("login");
//   };

//   return (
//     <nav className="relative z-50 h-[60px] w-full bg-dark-layer-1 px-6 shadow-md">
//       <div className="flex h-full w-full items-center justify-between max-w-[1200px] mx-auto">

//         {/* ---------------- Animated SVG Logo ---------------- */}
//         <Link href="/" className="flex items-center shrink-0">
//           <svg
//             viewBox="0 0 650 160"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-auto"
//           >
//             <defs>
//               <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feGaussianBlur stdDeviation="5" result="blur" />
//                 <feMerge>
//                   <feMergeNode in="blur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>

//               <style>
//                 {`
//                   .pulse {
//                     animation: pulse 2.5s infinite ease-in-out;
//                   }

//                   @keyframes pulse {
//                     0% { opacity: 0.7; }
//                     50% { opacity: 1; }
//                     100% { opacity: 0.7; }
//                   }
//                 `}
//               </style>
//             </defs>

//             {/* Icon */}
//             <g>
//               <rect
//                 x="30"
//                 y="30"
//                 width="80"
//                 height="80"
//                 rx="12"
//                 stroke="#FF6A00"
//                 strokeWidth="4"
//                 fill="none"
//               />

//               <polygon
//                 points="70,45 95,70 70,95 45,70"
//                 fill="#FF6A00"
//                 filter="url(#orangeGlow)"
//                 className="pulse"
//               />
//             </g>

//             {/* Text: Mr. */}
//             <text
//               x="150"
//               y="85"
//               fontSize="64"
//               fontFamily="Segoe UI, sans-serif"
//               fontWeight="700"
//               fill="#FF6A00"
//               className="pulse"
//             >
//               Mr.
//             </text>

//             {/* Text: Code */}
//             <text
//               x="260"
//               y="85"
//               fontSize="64"
//               fontFamily="Segoe UI, sans-serif"
//               fontWeight="600"
//               fill="#E5E7EB"
//             >
//               Code
//             </text>
//           </svg>
//         </Link>

//         {/* ---------------- Problem Navigation ---------------- */}
//         {problemPage && (
//           <div className="flex items-center gap-4">
//             <button onClick={() => handleProblemChange(false)}>
//               <FaChevronLeft />
//             </button>

//             <Link href="/" className="flex items-center gap-2">
//               <BsList />
//               <span>Problem List</span>
//             </Link>

//             <button onClick={() => handleProblemChange(true)}>
//               <FaChevronRight />
//             </button>
//           </div>
//         )}

//         {/* ---------------- Right Section ---------------- */}
//         <div className="flex items-center gap-5 shrink-0">

//           <a
//             href="https://www.buymeacoffee.com/burakorkmezz"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex rounded bg-dark-fill-3 px-3 py-1.5 text-brand-orange hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
//           >
//             Premium
//           </a>

//           {/* Sign In */}
//           {!user && (
//             <button
//               onClick={handleLogin}
//               className="inline-flex rounded bg-brand-orange px-3 py-1.5 text-white hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
//             >
//               Sign In
//             </button>
//           )}

//           {problemPage && <Timer />}

//           {/* Profile + Logout */}
//           {user && (
//             <>
//               <div className="relative group cursor-pointer">
//                 <img
//                   src="/avatar.png"
//                   alt="profile"
//                   className="h-8 w-8 rounded-full"
//                 />
//                 <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-dark-layer-1 text-brand-orange px-3 py-1 rounded shadow-lg scale-0 group-hover:scale-100 transition-all duration-200">
//                   <p className="text-sm">{user.email}</p>
//                 </div>
//               </div>

//               <Logout />
//             </>
//           )}
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
  const openModal = useAuthModal((s) => s.openModal);
  const router = useRouter();
  const params = useParams();
  const pid = params?.pid as string;

  /* ---------------- Problem Navigation ---------------- */
  const handleProblemChange = (isForward: boolean) => {
    if (!pid) return;

    const { order } = problems[pid] as unknown as Problem;
    const direction = isForward ? 1 : -1;
    const nextOrder = order + direction;

    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextOrder
    );

    if (nextProblemKey) {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  /* ---------------- AUTH NAVIGATION (WORKING) ---------------- */
  const handleLogin = () => {
    router.push("/auth");   // ✅ important for your setup
    openModal("login");     // ✅ open modal
  };

  return (
    <nav className="relative z-50 h-12.5 w-full bg-dark-layer-1 px-5">
      <div className="flex h-full w-full items-center justify-between max-w-300 mx-auto">

        {/* Logo */}

        <Link href="/" className="flex items-center shrink-0">
          <svg
            viewBox="0 0 650 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-auto"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <style>
                {`
          .pulse {
            animation: pulse 2s infinite ease-in-out;
          }

          .float {
            animation: float 4s infinite ease-in-out;
          }

          .draw {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: draw 2s ease forwards;
          }

          @keyframes pulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }

          @keyframes draw {
            to { stroke-dashoffset: 0; }
          }
        `}
              </style>
            </defs>

            {/* Animated Icon */}
            <g className="float">
              <rect
                x="40"
                y="40"
                width="80"
                height="80"
                rx="12"
                stroke="#FF6A00"
                strokeWidth="4"
                fill="none"
                className="draw"
              />

              <polygon
                points="80,55 105,80 80,105 55,80"
                fill="#FF6A00"
                filter="url(#glow)"
                className="pulse"
              />
            </g>

            {/* Text: Mr. */}
            <text
              x="160"
              y="95"
              fontSize="64"
              fontWeight="700"
              fill="#FF6A00"
              className="pulse"
              fontFamily="Segoe UI, sans-serif"
            >
              Mr.
            </text>

            {/* Text: Code */}
            <text
              x="270"
              y="95"
              fontSize="64"
              fontWeight="600"
              fill="#E5E7EB"
              fontFamily="Segoe UI, sans-serif"
            >
              Code
            </text>

            {/* Tagline */}
            <text
              x="160"
              y="140"
              fontSize="22"
              fill="#9CA3AF"
              fontFamily="Segoe UI, sans-serif"
            >
              The Art of Problem Solving
            </text>
          </svg>
        </Link>


        {/* Problem Navigation */}
        {/* {problemPage && (
          <div className="flex items-center gap-4 ">
            <button onClick={() => handleProblemChange(false)}>
              <FaChevronLeft />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <BsList />
              <span>Problem List</span>
            </Link>

            <button onClick={() => handleProblemChange(true)}>
              <FaChevronRight />
            </button>
          </div>
        )} */}
        {problemPage && (
          <div className='flex items-center gap-4 flex-1 justify-center'>
            <div
              className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer text-dark-gray-7'
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>

            <Link
              href='/'
              className='flex items-center gap-2 font-medium max-w-42.5 text-dark-gray-7 hover:text-brand-orange cursor-pointer'
            >
              <BsList />
              <p>Problem List</p>
            </Link>

            <div
              className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer text-dark-gray-7'
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-5 shrink-0">

          <a
            href="https://www.buymeacoffee.com/burakorkmezz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded bg-dark-fill-3 px-3 py-1.5 text-brand-orange hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
          >
            Premium
          </a>

          {/* ✅ SIGN IN */}
          {!user && (
            <button
              onClick={handleLogin}
              className="inline-flex rounded bg-brand-orange px-3 py-1.5 text-white hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          )}

          {problemPage && <Timer />}

          {/* ✅ PROFILE + LOGOUT */}
          {user && (
            <>
              <div className="relative group cursor-pointer">
                <img
                  src="/avatar.png"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />

                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-dark-layer-1 text-brand-orange px-3 py-1 rounded shadow-lg scale-0 group-hover:scale-100 transition-all duration-200">
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>

              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;