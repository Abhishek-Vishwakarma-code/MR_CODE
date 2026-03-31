"use client";

import { DBProblem, Problem } from "@/utils/types/problem";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  runTransaction,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLoading3Quarters,
  AiFillStar,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import RectangleSkeleton from "../../Skeletons/RectangleSkeleton";
import CircleSkeleton from "../../Skeletons/CircleSkeleton";
import { auth, firestore } from "@/firebase/firebase";

type ProblemDescriptionProps = {
  problem: Problem;
  _solved: boolean;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, _solved }) => {
  const [user] = useAuthState(auth);
  const { currentProblem, loading, problemDifficultyClass, setCurrentProblem } = useGetCurrentProblem(problem.id);
  const { liked, disliked, solved, setData, starred } = useGetUsersDataOnProblem(problem.id);
  const [updating, setUpdating] = useState(false);

  const returnUserDataAndProblemData = async (transaction: any) => {
    const userRef = doc(firestore, "users", user!.uid);
    const problemRef = doc(firestore, "problems", problem.id);
    const userDoc = await transaction.get(userRef);
    const problemDoc = await transaction.get(problemRef);
    return { userDoc, problemDoc, userRef, problemRef };
  };

  const handleLike = async () => {
    if (!user) {
      toast.error("You must be logged in to like a problem", { position: "top-left", theme: "dark" });
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      await runTransaction(firestore, async (transaction) => {
        const { problemDoc, userDoc, problemRef, userRef } = await returnUserDataAndProblemData(transaction);

        if (userDoc.exists() && problemDoc.exists()) {
          const uData = userDoc.data();
          const pData = problemDoc.data();
          
          const likedProblems = uData.likedProblems || [];
          const dislikedProblems = uData.dislikedProblems || [];
          const likes = pData.likes || 0;
          const dislikes = pData.dislikes || 0;

          if (liked) {
            transaction.update(userRef, {
              likedProblems: likedProblems.filter((id: string) => id !== problem.id),
            });
            transaction.update(problemRef, {
              likes: likes - 1,
            });
            setCurrentProblem((prev) => (prev ? { ...prev, likes: likes - 1 } : null));
            setData((prev) => ({ ...prev, liked: false }));
          } else if (disliked) {
            transaction.update(userRef, {
              likedProblems: [...likedProblems, problem.id],
              dislikedProblems: dislikedProblems.filter((id: string) => id !== problem.id),
            });
            transaction.update(problemRef, {
              likes: likes + 1,
              dislikes: dislikes - 1,
            });
            setCurrentProblem((prev) =>
              prev ? { ...prev, likes: likes + 1, dislikes: dislikes - 1 } : null
            );
            setData((prev) => ({ ...prev, liked: true, disliked: false }));
          } else {
            transaction.update(userRef, {
              likedProblems: [...likedProblems, problem.id],
            });
            transaction.update(problemRef, {
              likes: likes + 1,
            });
            setCurrentProblem((prev) => (prev ? { ...prev, likes: likes + 1 } : null));
            setData((prev) => ({ ...prev, liked: true }));
          }
        }
      });
    } catch (error: any) {
      toast.error(error.message || "An error occurred", { position: "top-left", theme: "dark" });
    } finally {
      setUpdating(false);
    }
  };

  const handleDislike = async () => {
    if (!user) {
      toast.error("You must be logged in to dislike a problem", { position: "top-left", theme: "dark" });
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      await runTransaction(firestore, async (transaction) => {
        const { problemDoc, userDoc, problemRef, userRef } = await returnUserDataAndProblemData(transaction);
        if (userDoc.exists() && problemDoc.exists()) {
          const uData = userDoc.data();
          const pData = problemDoc.data();
          
          const likedProblems = uData.likedProblems || [];
          const dislikedProblems = uData.dislikedProblems || [];
          const likes = pData.likes || 0;
          const dislikes = pData.dislikes || 0;

          if (disliked) {
            transaction.update(userRef, {
              dislikedProblems: dislikedProblems.filter((id: string) => id !== problem.id),
            });
            transaction.update(problemRef, {
              dislikes: dislikes - 1,
            });
            setCurrentProblem((prev) => (prev ? { ...prev, dislikes: dislikes - 1 } : null));
            setData((prev) => ({ ...prev, disliked: false }));
          } else if (liked) {
            transaction.update(userRef, {
              dislikedProblems: [...dislikedProblems, problem.id],
              likedProblems: likedProblems.filter((id: string) => id !== problem.id),
            });
            transaction.update(problemRef, {
              dislikes: dislikes + 1,
              likes: likes - 1,
            });
            setCurrentProblem((prev) =>
              prev ? { ...prev, dislikes: dislikes + 1, likes: likes - 1 } : null
            );
            setData((prev) => ({ ...prev, disliked: true, liked: false }));
          } else {
            transaction.update(userRef, {
              dislikedProblems: [...dislikedProblems, problem.id],
            });
            transaction.update(problemRef, {
              dislikes: dislikes + 1,
            });
            setCurrentProblem((prev) => (prev ? { ...prev, dislikes: dislikes + 1 } : null));
            setData((prev) => ({ ...prev, disliked: true }));
          }
        }
      });
    } catch (error: any) {
      toast.error(error.message || "An error occurred", { position: "top-left", theme: "dark" });
    } finally {
      setUpdating(false);
    }
  };

  const handleStar = async () => {
    if (!user) {
      toast.error("You must be logged in to star a problem", { position: "top-left", theme: "dark" });
      return;
    }
    if (updating) return;
    setUpdating(true);

    try {
      if (!starred) {
        const userRef = doc(firestore, "users", user.uid);
        await updateDoc(userRef, {
          starredProblems: arrayUnion(problem.id),
        });
        setData((prev) => ({ ...prev, starred: true }));
      } else {
        const userRef = doc(firestore, "users", user.uid);
        await updateDoc(userRef, {
          starredProblems: arrayRemove(problem.id),
        });
        setData((prev) => ({ ...prev, starred: false }));
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred", { position: "top-left", theme: "dark" });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] h-full transition-colors duration-300">
      
      {/* TAB HEADER */}
      <div className="flex h-12 w-full items-end pt-2 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-secondary)] px-2">
        <div className="bg-[var(--bg-primary)] border-t border-x border-[var(--border-color)] rounded-t-xl px-5 py-2.5 text-sm font-bold text-[var(--text-primary)] cursor-pointer shadow-sm">
          Description
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex px-0 py-6 h-[calc(100vh-94px)] overflow-y-auto custom-scrollbar pb-24">
        <div className="px-6 w-full">
          
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <h1 className="flex-1 mr-2 text-2xl text-[var(--text-primary)] font-bold tracking-tight">
                {problem?.title}
              </h1>
            </div>
            
            {/* Meta tags (Difficulty, Solved, Actions) */}
            {!loading && currentProblem && (
              <div className="flex flex-wrap items-center mt-4 gap-3">
                
                {/* Difficulty Badge */}
                <div
                  className={`${problemDifficultyClass} inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider`}
                >
                  {currentProblem.difficulty}
                </div>
                
                {/* Solved Checkmark */}
                {(solved || _solved) && (
                  <div className="rounded p-1 text-lg text-emerald-500 bg-emerald-500/10 shadow-sm" title="Solved">
                    <BsCheck2Circle />
                  </div>
                )}
                
                {/* Like Button */}
                <button
                  className={`flex items-center cursor-pointer space-x-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 
                    ${liked ? "bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border border-[var(--brand-orange)]/30" : "bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)]"}
                  `}
                  onClick={handleLike}
                  disabled={updating}
                >
                  {updating && !liked && !disliked ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    <AiFillLike className={liked ? "text-[var(--brand-orange)]" : ""} />
                  )}
                  <span>{currentProblem.likes}</span>
                </button>
                
                {/* Dislike Button */}
                <button
                  className={`flex items-center cursor-pointer space-x-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 
                    ${disliked ? "bg-rose-500/10 text-rose-500 border border-rose-500/30" : "bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)]"}
                  `}
                  onClick={handleDislike}
                  disabled={updating}
                >
                  {updating && !liked && !disliked ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    <AiFillDislike className={disliked ? "text-rose-500" : ""} />
                  )}
                  <span>{currentProblem.dislikes}</span>
                </button>
                
                {/* Star Button */}
                <button
                  className={`flex items-center cursor-pointer space-x-1 rounded-lg px-2.5 py-1.5 text-lg transition-all duration-200 
                    ${starred ? "bg-amber-500/10 text-amber-500 border border-amber-500/30" : "bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)]"}
                  `}
                  onClick={handleStar}
                  disabled={updating}
                >
                  {updating && !starred ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : starred ? (
                    <AiFillStar className="text-amber-500" />
                  ) : (
                    <TiStarOutline />
                  )}
                </button>
              </div>
            )}

            {/* Loading Skeletons */}
            {loading && (
              <div className="mt-4 flex space-x-2">
                <RectangleSkeleton />
                <CircleSkeleton />
                <RectangleSkeleton />
                <RectangleSkeleton />
                <CircleSkeleton />
              </div>
            )}

            {/* Problem Statement (HTML) */}
            <div className="text-[var(--text-primary)] text-sm leading-relaxed mt-6 mb-8 prose-p:mb-4">
              <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
            </div>

            {/* Examples */}
            <div className="mt-8 space-y-6">
              {problem.examples.map((example, index) => (
                <div key={example.id}>
                  <p className="font-bold text-[var(--text-primary)] text-base mb-3">
                    Example {index + 1}:
                  </p>
                  {example.img && <img src={example.img} alt="" className="mt-3 rounded-lg border border-[var(--border-color)] shadow-sm max-w-full" />}
                  <div className="example-card">
                    <pre>
                      <strong className="text-[var(--text-primary)]">Input: </strong> {example.inputText}
                      <br />
                      <strong className="text-[var(--text-primary)] mt-2 inline-block">Output: </strong> {example.outputText} 
                      <br />
                      {example.explanation && (
                        <>
                          <strong className="text-[var(--text-primary)] mt-2 inline-block">Explanation: </strong> {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="mt-10 pb-8 border-t border-[var(--border-color)] pt-6">
              <div className="text-[var(--text-primary)] text-sm font-bold mb-3">Constraints:</div>
              <ul className="text-[var(--text-secondary)] ml-5 list-disc space-y-2 text-sm">
                <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;

/* ================= CUSTOM HOOKS ================= */

function useGetCurrentProblem(problemId: string) {
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] = useState<string>("");

  useEffect(() => {
    // Get problem from DB
    const getCurrentProblem = async () => {
      setLoading(true);
      const docRef = doc(firestore, "problems", problemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const problem = docSnap.data();
        setCurrentProblem({ id: docSnap.id, ...problem } as DBProblem);
        
        // Match the Easy/Medium/Hard badges to the ProblemsTable
        setProblemDifficultyClass(
          problem.difficulty === "Easy"
            ? "text-emerald-500 bg-emerald-500/10"
            : problem.difficulty === "Medium"
            ? "text-amber-500 bg-amber-500/10"
            : "text-rose-500 bg-rose-500/10"
        );
      }
      setLoading(false);
    };
    getCurrentProblem();
  }, [problemId]);

  return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}

function useGetUsersDataOnProblem(problemId: string) {
  const [data, setData] = useState({ liked: false, disliked: false, starred: false, solved: false });
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getUsersDataOnProblem = async () => {
      const userRef = doc(firestore, "users", user!.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        const { solvedProblems = [], likedProblems = [], dislikedProblems = [], starredProblems = [] } = data;
        setData({
          liked: likedProblems.includes(problemId),
          disliked: dislikedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
          solved: solvedProblems.includes(problemId),
        });
      }
    };

    if (user) getUsersDataOnProblem();
    return () => setData({ liked: false, disliked: false, starred: false, solved: false });
  }, [problemId, user]);

  return { ...data, setData };
}