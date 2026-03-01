"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

// react-split MUST be dynamic in App Router
const Split = dynamic(() => import("react-split"), { ssr: false });

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();

  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

return (
  <>
    <Split className="flex h-screen" minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />

      <div className="bg-dark-fill-2 relative">
        <Playground
          problem={problem}
          setSuccess={setSuccess}
          setSolved={setSolved}
        />
      </div>
    </Split>

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
  </>
);
};

export default Workspace;

