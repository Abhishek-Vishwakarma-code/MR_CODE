import { Problem } from "../types/problem";

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "7. Merge Intervals",
  order: 7,
  difficulty: "Medium",

  problemStatement: `
<p>
Given an array of intervals where
<code>intervals[i] = [start, end]</code>,
merge all overlapping intervals.
</p>
`,

  examples: [
    {
      id: 1,
      inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      outputText: "[[1,6],[8,10],[15,18]]",
    },
    {
      id: 2,
      inputText: "intervals = [[1,4],[4,5]]",
      outputText: "[[1,5]]",
    },
  ],

  constraints: `
<li>1 ≤ intervals.length ≤ 10⁴</li>
<li>intervals[i].length == 2</li>
`,

  starterCode: `function merge(intervals) {
  // Write your code here
};`,

  starterFunctionName: "function merge(",
};
