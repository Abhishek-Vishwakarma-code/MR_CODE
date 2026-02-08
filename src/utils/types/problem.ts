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
  examples: {
    id: number;
    inputText: string;
    outputText: string;
    explanation?: string;
    img?: string;
  }[];
  constraints: string;
  starterCode: string;
  starterFunctionName: string;
  order: number;
  difficulty: "Easy" | "Medium" | "Hard";
};



export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};