import { Problem } from "../types/problem";

export const subsets: Problem = {
  id: "subsets",
  title: "10. Subsets",
  order: 10,
  difficulty: "Medium",

  problemStatement: `
<p>
Given an integer array <code>nums</code>,
return all possible subsets.
</p>
<p>
The solution set must not contain duplicate subsets.
</p>
`,

  examples: [
    {
      id: 1,
      inputText: "nums = [1,2,3]",
      outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
    },
    {
      id: 2,
      inputText: "nums = [0]",
      outputText: "[[],[0]]",
    },
  ],

  constraints: `
<li>1 ≤ nums.length ≤ 10</li>
<li>-10 ≤ nums[i] ≤ 10</li>
`,

  starterCode: `function subsets(nums) {
  // Write your code here
};`,

  starterFunctionName: "function subsets(",
};
