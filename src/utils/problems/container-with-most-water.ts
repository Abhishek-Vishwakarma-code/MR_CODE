import { Problem } from "../types/problem";

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "6. Container With Most Water",
  order: 6,
  difficulty: "Medium",

  problemStatement: `
<p>
You are given an integer array <code>height</code>.
Choose two lines that together with the x-axis form a container.
</p>
<p>
Return the maximum amount of water a container can store.
</p>
`,

  examples: [
    {
      id: 1,
      inputText: "height = [1,8,6,2,5,4,8,3,7]",
      outputText: "49",
    },
    {
      id: 2,
      inputText: "height = [1,1]",
      outputText: "1",
    },
  ],

  constraints: `
<li>2 ≤ height.length ≤ 10⁵</li>
<li>0 ≤ height[i] ≤ 10⁴</li>
`,

  starterCode: `function maxArea(height) {
  // Write your code here
};`,

  starterFunctionName: "function maxArea(",
};
