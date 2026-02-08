import { Problem } from "../types/problem";

export const jumpGame: Problem = {
  id: "jump-game",
  title: "3. Jump Game",
  order: 3,
  difficulty: "Medium",

  problemStatement: `
<p>You are given an array <code>nums</code>. Each element represents max jump length.</p>
<p>Return true if you can reach the last index.</p>
`,

  examples: [
    { id: 1, inputText: "nums = [2,3,1,1,4]", outputText: "true" },
    { id: 2, inputText: "nums = [3,2,1,0,4]", outputText: "false" },
  ],

  constraints: `<li>1 ≤ nums.length ≤ 10⁴</li>`,

  starterCode: `function canJump(nums) {
  // Write your code here
};`,
  starterFunctionName: "function canJump(",
};
