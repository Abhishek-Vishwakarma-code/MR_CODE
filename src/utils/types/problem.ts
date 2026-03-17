import { ReactNode } from "react";

// local problem data
export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;

  // MULTI-LANGUAGE SUPPORT
  starterCode: {
    javascript: string;
    python: string;
    cpp: string;
    java: string;
    c: string;
  };

  starterFunctionName: string;
  order: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category?: string;

  // NEW: Store the full documentation/explanation content here
  explanation: string;
};

export type DBProblem = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes: number;
  dislikes: number;
  order: number;
  link: string;
  // REMOVED: videoId and link fields to clean up database model
  // OPTIONAL: hasDoc allows UI to show a "Coming Soon" state if explanation is missing
  hasDoc?: boolean;
};

/**
 * DBProblemSummary: A helper type for the dashboard table.
 * It omits heavy content fields to keep initial fetches fast.
 */
export type DBProblemSummary = Omit<
  Problem,
  "problemStatement" | "examples" | "constraints" | "starterCode" | "starterFunctionName" | "explanation"
>;