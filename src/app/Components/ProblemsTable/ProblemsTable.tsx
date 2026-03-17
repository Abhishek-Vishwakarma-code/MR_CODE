"use client";

import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { problems as localProblems } from "@/mockProblems/problems";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi"; // Professional Docs Icon

type ProblemsTableProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
  const problems = useGetProblems(setLoadingProblems);
  const solvedProblems = useGetSolvedProblems();

  return (
    <tbody className="text-[var(--text-primary)]">
      {problems.map((problem) => {
        const isSolved = solvedProblems.includes(problem.id);

        return (
          <tr
            key={problem.id}
            className="problem-row group transition-all duration-200 border-b border-[var(--border-color)] last:border-none"
          >
            {/* 1. Status Column */}
            <td className="px-4 sm:px-6 py-4 text-center w-16">
              <div className="flex justify-center items-center relative group/status">
                {isSolved ? (
                  <BsCheckCircleFill size={18} className="text-emerald-500 mx-auto" />
                ) : (
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-[var(--border-color)] mx-auto opacity-40 group-hover:border-[var(--brand-orange)] group-hover:opacity-100 transition-colors"></div>
                )}
              </div>
            </td>

            {/* 2. Title Column */}
            <td className="px-4 sm:px-6 py-4 font-semibold text-[var(--text-primary)]">
              <Link
                href={`/problems/${problem.id}`}
                className="hover:text-[var(--brand-orange)] transition-colors inline-block w-full"
              >
                {problem.title}
              </Link>
            </td>

            {/* 3. Difficulty Column */}
            <td className="px-4 sm:px-6 py-4">
              <span
                className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wide
                  ${problem.difficulty === "Easy"
                    ? "text-emerald-500 bg-emerald-500/10"
                    : problem.difficulty === "Medium"
                      ? "text-amber-500 bg-amber-500/10"
                      : "text-rose-500 bg-rose-500/10"
                  }`}
              >
                {problem.difficulty}
              </span>
            </td>

            {/* 4. Category Column */}
            <td className="px-4 sm:px-6 py-4">
              <span className="text-[var(--text-secondary)] font-medium text-[10px] sm:text-xs bg-[var(--bg-accent)] px-2.5 py-1.5 rounded-md whitespace-nowrap">
                {problem.category}
              </span>
            </td>

            {/* 5. NEW Docs Column */}
            <td className="px-4 sm:px-6 py-4 text-center">
              <Link href={`/problems/${problem.id}/docs`}>
                <HiDocumentText
                  size={24}
                  className="cursor-pointer text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors mx-auto"
                />
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;

/* ================= CUSTOM HOOKS ================= */

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoadingProblems(true);
      try {
        const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const dbProblems: DBProblem[] = [];

        querySnapshot.forEach((doc) => {
          dbProblems.push({ id: doc.id, ...doc.data() } as DBProblem);
        });

        const mergedProblems = [...localProblems] as DBProblem[];
        dbProblems.forEach((dbP) => {
          const index = mergedProblems.findIndex((p) => p.id === dbP.id);
          if (index !== -1) {
            mergedProblems[index] = { ...mergedProblems[index], ...dbP };
          } else {
            mergedProblems.push(dbP);
          }
        });

        setProblems(mergedProblems.sort((a, b) => a.order - b.order));
      } catch (error) {
        console.error("Error fetching problems:", error);
        setProblems([...localProblems] as DBProblem[]);
      } finally {
        setLoadingProblems(false);
      }
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