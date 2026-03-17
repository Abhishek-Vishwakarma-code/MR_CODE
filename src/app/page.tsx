"use client";
import { useState } from "react";
import ProblemsTable from "./Components/ProblemsTable/ProblemsTable";
import Topbar from "./Components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      <Topbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--text-primary)] uppercase">
            &ldquo; QUALITY OVER <span className="text-[var(--brand-orange)]">QUANTITY</span> &ldquo; 👇
          </h1>
        </header>

        <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-xl shadow-black/5 transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">

              {/* Header is ALWAYS visible to lock in column widths */}
              <thead className="text-[11px] sm:text-xs uppercase tracking-wider bg-[var(--bg-accent)] text-[var(--text-muted)] border-b border-[var(--border-color)]">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-4 font-bold text-center w-16">Status</th>
                  <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Title</th>
                  <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Difficulty</th>
                  <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Category</th>
                  <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Docs</th>

                </tr>
              </thead>

              {/* Skeletons: Only render when loading */}
              {loadingProblems && (
                <tbody className="animate-pulse">
                  {[...Array(10)].map((_, idx) => (
                    <LoadingSkeleton key={idx} />
                  ))}
                </tbody>
              )}

              {/* ProblemsTable: MUST always be mounted so it can fetch data! 
                  If it is loading, it will just render an empty <tbody> in the DOM
                  behind the skeletons without breaking the layout. */}
              <ProblemsTable setLoadingProblems={setLoadingProblems} />

            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

/* Skeleton is a proper <tr> to maintain perfect column alignment */
/* LoadingSkeleton inside your Home file */
const LoadingSkeleton = () => {
  return (
    <tr className="border-b border-[var(--border-color)] last:border-none transition-colors duration-200">
      {/* Status */}
      <td className="px-4 sm:px-6 py-5 w-16">
        <div className="w-5 h-5 mx-auto rounded-full bg-[var(--bg-accent)]"></div>
      </td>
      {/* Title */}
      <td className="px-4 sm:px-6 py-5">
        <div className="h-4 w-40 sm:w-64 rounded-full bg-[var(--bg-accent)]"></div>
      </td>
      {/* Difficulty */}
      <td className="px-4 sm:px-6 py-5">
        <div className="h-6 w-16 rounded-lg bg-[var(--bg-accent)]"></div>
      </td>
      {/* Category */}
      <td className="px-4 sm:px-6 py-5">
        <div className="h-6 w-20 sm:w-28 rounded-md bg-[var(--bg-accent)]"></div>
      </td>
      {/* Docs (5th Column) */}
      <td className="px-4 sm:px-6 py-5">
        <div className="h-6 w-8 mx-auto rounded-md bg-[var(--bg-accent)]"></div>
      </td>
    </tr>
  );
};