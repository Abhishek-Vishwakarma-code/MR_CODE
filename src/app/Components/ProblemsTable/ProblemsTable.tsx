// "use client";

// import { auth, firestore } from "@/firebase/firebase";
// import { DBProblem } from "@/utils/types/problem";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   orderBy,
//   query,
// } from "firebase/firestore";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { AiFillYoutube } from "react-icons/ai";
// import { BsCheckCircle } from "react-icons/bs";
// import { IoClose } from "react-icons/io5";
// import YouTube from "react-youtube";

// type ProblemsTableProps = {
//   setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const ProblemsTable: React.FC<ProblemsTableProps> = ({
//   setLoadingProblems,
// }) => {
//   const [youtubePlayer, setYoutubePlayer] = useState({
//     isOpen: false,
//     videoId: "",
//   });

//   const problems = useGetProblems(setLoadingProblems);
//   const solvedProblems = useGetSolvedProblems();

//   const closeModal = () => {
//     setYoutubePlayer({ isOpen: false, videoId: "" });
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <>
//       {/* ================= TABLE BODY ================= */}
//       <tbody className="text-white">
//         {problems.map((problem, idx) => {
//           const difficultyColor =
//             problem.difficulty === "Easy"
//               ? "text-dark-green-s"
//               : problem.difficulty === "Medium"
//               ? "text-dark-yellow"
//               : "text-dark-pink";

//           return (
//             <tr
//               key={problem.id}
//               className={idx % 2 === 1 ? "bg-dark-layer-1" : ""}
//             >
//               <th className="px-2 py-4">
//                 {solvedProblems.includes(problem.id) && (
//                   <BsCheckCircle fontSize={18} />
//                 )}
//               </th>

//               <td className="px-6 py-4">
//                 <Link
//                   href={`/problems/${problem.id}`}
//                   className="hover:text-blue-600"
//                 >
//                   {problem.title}
//                 </Link>
//               </td>

//               <td className={`px-6 py-4 ${difficultyColor}`}>
//                 {problem.difficulty}
//               </td>

//               <td className="px-6 py-4">{problem.category}</td>

//               <td className="px-6 py-4">
//                 {problem.videoId ? (
//                   <AiFillYoutube
//                     fontSize={28}
//                     className="cursor-pointer hover:text-red-600"
//                     onClick={() =>
//                       setYoutubePlayer({
//                         isOpen: true,
//                         videoId: problem.videoId!,
//                       })
//                     }
//                   />
//                 ) : (
//                   <p className="text-gray-400">Coming Soon</p>
//                 )}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>

//       {/* ================= MODAL (OUTSIDE TABLE) ================= */}
//       {youtubePlayer.isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* overlay */}
//           <div
//             className="absolute inset-0 bg-black opacity-70"
//             onClick={closeModal}
//           />

//           {/* modal content */}
//           <div className="relative z-50 w-full max-w-4xl px-6">
//             <IoClose
//               fontSize={35}
//               className="cursor-pointer absolute -top-12 right-0 text-white"
//               onClick={closeModal}
//             />

//             <YouTube
//               videoId={youtubePlayer.videoId}
//               iframeClassName="w-full min-h-[500px]"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProblemsTable;

// /* ================= HOOKS ================= */

// function useGetProblems(
//   setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
// ) {
//   const [problems, setProblems] = useState<DBProblem[]>([]);

//   useEffect(() => {
//     const getProblems = async () => {
//       setLoadingProblems(true);

//       const q = query(
//         collection(firestore, "problems"),
//         orderBy("order", "asc")
//       );

//       const querySnapshot = await getDocs(q);
//       const tmp: DBProblem[] = [];

//       querySnapshot.forEach((doc) => {
//         tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
//       });

//       setProblems(tmp);
//       setLoadingProblems(false);
//     };

//     getProblems();
//   }, [setLoadingProblems]);

//   return problems;
// }

// function useGetSolvedProblems() {
//   const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const getSolvedProblems = async () => {
//       if (!user) {
//         setSolvedProblems([]);
//         return;
//       }

//       const userRef = doc(firestore, "users", user.uid);
//       const userDoc = await getDoc(userRef);

//       if (userDoc.exists()) {
//         setSolvedProblems(userDoc.data().solvedProblems || []);
//       }
//     };

//     getSolvedProblems();
//   }, [user]);

//   return solvedProblems;
// }
// "use client";

// import { auth, firestore } from "@/firebase/firebase";
// import { DBProblem } from "@/utils/types/problem";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   orderBy,
//   query,
// } from "firebase/firestore";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { AiFillYoutube } from "react-icons/ai";
// import { BsCheckCircle } from "react-icons/bs";
// import { IoClose } from "react-icons/io5";
// import YouTube from "react-youtube";

// type ProblemsTableProps = {
//   setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const ProblemsTable: React.FC<ProblemsTableProps> = ({
//   setLoadingProblems,
// }) => {
//   const [youtubePlayer, setYoutubePlayer] = useState({
//     isOpen: false,
//     videoId: "",
//   });

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Prevent background scroll when modal open
//   useEffect(() => {
//     if (youtubePlayer.isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [youtubePlayer.isOpen]);

//   const problems = useGetProblems(setLoadingProblems);
//   const solvedProblems = useGetSolvedProblems();

//   const closeModal = () => {
//     setYoutubePlayer({ isOpen: false, videoId: "" });
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <>
//       {/* ================= TABLE BODY ================= */}
//       <tbody className="text-white">
//         {problems.map((problem, idx) => {
//           const difficultyColor =
//             problem.difficulty === "Easy"
//               ? "text-dark-green-s"
//               : problem.difficulty === "Medium"
//               ? "text-dark-yellow"
//               : "text-dark-pink";

//           return (
//             <tr
//               key={problem.id}
//               className={idx % 2 === 1 ? "bg-dark-layer-1" : ""}
//             >
//               <th className="px-2 py-4">
//                 {solvedProblems.includes(problem.id) && (
//                   <BsCheckCircle fontSize={18} />
//                 )}
//               </th>

//               <td className="px-6 py-4">
//                 <Link
//                   href={`/problems/${problem.id}`}
//                   className="hover:text-blue-600"
//                 >
//                   {problem.title}
//                 </Link>
//               </td>

//               <td className={`px-6 py-4 ${difficultyColor}`}>
//                 {problem.difficulty}
//               </td>

//               <td className="px-6 py-4">{problem.category}</td>

//               <td className="px-6 py-4">
//                 {problem.videoId ? (
//                   <AiFillYoutube
//                     fontSize={28}
//                     className="cursor-pointer hover:text-red-600"
//                     onClick={() =>
//                       setYoutubePlayer({
//                         isOpen: true,
//                         videoId: problem.videoId!,
//                       })
//                     }
//                   />
//                 ) : (
//                   <p className="text-gray-400">Coming Soon</p>
//                 )}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>

//       {/* ================= MODAL VIA PORTAL ================= */}
//       {mounted &&
//         createPortal(
//           <div
//             className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
//               youtubePlayer.isOpen
//                 ? "opacity-100 visible"
//                 : "opacity-0 invisible"
//             }`}
//           >
//             {/* Overlay */}
//             <div
//               className="absolute inset-0 bg-black opacity-70"
//               onClick={closeModal}
//             />

//             {/* Modal Content */}
//             <div className="relative z-50 w-full max-w-4xl px-6">
//               <IoClose
//                 fontSize={35}
//                 className="cursor-pointer absolute -top-12 right-0 text-white"
//                 onClick={closeModal}
//               />

//               {/* Only mount YouTube when video exists */}
//               {youtubePlayer.videoId && (
//                 <YouTube
//                   videoId={youtubePlayer.videoId}
//                   iframeClassName="w-full min-h-[500px]"
//                   opts={{
//                     playerVars: {
//                       autoplay: 1,
//                     },
//                   }}
//                 />
//               )}
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default ProblemsTable;

// /* ================= CUSTOM HOOKS ================= */

// function useGetProblems(
//   setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
// ) {
//   const [problems, setProblems] = useState<DBProblem[]>([]);

//   useEffect(() => {
//     const getProblems = async () => {
//       setLoadingProblems(true);

//       const q = query(
//         collection(firestore, "problems"),
//         orderBy("order", "asc")
//       );

//       const querySnapshot = await getDocs(q);
//       const tmp: DBProblem[] = [];

//       querySnapshot.forEach((doc) => {
//         tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
//       });

//       setProblems(tmp);
//       setLoadingProblems(false);
//     };

//     getProblems();
//   }, [setLoadingProblems]);

//   return problems;
// }

// function useGetSolvedProblems() {
//   const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const getSolvedProblems = async () => {
//       if (!user) {
//         setSolvedProblems([]);
//         return;
//       }

//       const userRef = doc(firestore, "users", user.uid);
//       const userDoc = await getDoc(userRef);

//       if (userDoc.exists()) {
//         setSolvedProblems(userDoc.data().solvedProblems || []);
//       }
//     };

//     getSolvedProblems();
//   }, [user]);

//   return solvedProblems;
// }
"use client";

import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillYoutube } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

type ProblemsTableProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({
  setLoadingProblems,
}) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = youtubePlayer.isOpen
      ? "hidden"
      : "auto";
  }, [youtubePlayer.isOpen]);

  const problems = useGetProblems(setLoadingProblems);
  const solvedProblems = useGetSolvedProblems();

  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ================= TABLE BODY ================= */}
      <tbody className="text-white">
        {problems.map((problem, idx) => {
          const difficultyColor =
            problem.difficulty === "Easy"
              ? "text-emerald-400"
              : problem.difficulty === "Medium"
              ? "text-yellow-400"
              : "text-red-400";

          const isSolved = solvedProblems.includes(problem.id);

          return (
            <tr
              key={problem.id}
              className={`transition-colors duration-200 ${
                idx % 2 === 1 ? "bg-dark-layer-1" : ""
              }`}
            >
              {/* STATUS */}
              <td className="px-2 py-4 text-center w-12">
                <div className="flex justify-center items-center relative group">
                  {isSolved && (
                    <>
                      <BsCheckCircleFill
                        size={18}
                        className="text-emerald-500 animate-fadeIn"
                      />

                      {/* Tooltip */}
                      <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-transform duration-200 bg-gray-800 text-xs px-2 py-1 rounded">
                        Solved
                      </span>
                    </>
                  )}
                </div>
              </td>

              {/* TITLE */}
              <td className="px-6 py-4 font-medium">
                <Link
                  href={`/problems/${problem.id}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {problem.title}
                </Link>
              </td>

              {/* DIFFICULTY */}
              <td className={`px-6 py-4 font-semibold ${difficultyColor}`}>
                {problem.difficulty}
              </td>

              {/* CATEGORY */}
              <td className="px-6 py-4 text-gray-300">
                {problem.category}
              </td>

              {/* SOLUTION */}
              <td className="px-6 py-4">
                {problem.videoId ? (
                  <AiFillYoutube
                    size={26}
                    className="cursor-pointer hover:text-red-500 transition-transform hover:scale-110"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: problem.videoId!,
                      })
                    }
                  />
                ) : (
                  <span className="text-gray-500 text-sm">
                    Coming Soon
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>

      {/* ================= MODAL VIA PORTAL ================= */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
              youtubePlayer.isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={closeModal}
            />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-4xl px-6">
              <IoClose
                size={35}
                className="cursor-pointer absolute -top-12 right-0 text-white hover:text-red-400"
                onClick={closeModal}
              />

              {youtubePlayer.videoId && (
                <YouTube
                  videoId={youtubePlayer.videoId}
                  iframeClassName="w-full min-h-[500px] rounded-lg shadow-lg"
                  opts={{
                    playerVars: { autoplay: 1 },
                  }}
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ProblemsTable;
/* ================= CUSTOM HOOKS ================= */

function useGetProblems(
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoadingProblems(true);

      const q = query(
        collection(firestore, "problems"),
        orderBy("order", "asc")
      );

      const querySnapshot = await getDocs(q);
      const tmp: DBProblem[] = [];

      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
      });

      setProblems(tmp);
      setLoadingProblems(false);
    };

    getProblems();
  }, [setLoadingProblems]);

  return problems;
}

function useGetSolvedProblems() {
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getSolvedProblems = async () => {
      if (!user) {
        setSolvedProblems([]);
        return;
      }

      const userRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setSolvedProblems(userDoc.data().solvedProblems || []);
      }
    };

    getSolvedProblems();
  }, [user]);

  return solvedProblems;
}