import { Problem } from "../types/problem";

export const maximumDepthOfBinaryTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "8. Maximum Depth of Binary Tree",
  order: 8,
  difficulty: "Easy",

  problemStatement: `
<p>
Given the root of a binary tree, return its maximum depth.
</p>
`,

  examples: [
    {
      id: 1,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
    },
    {
      id: 2,
      inputText: "root = [1,null,2]",
      outputText: "2",
    },
  ],

  constraints: `
<li>The number of nodes is in the range [0, 10⁴]</li>
`,

  starterCode: `function maxDepth(root) {
  // Write your code here
};`,

  starterFunctionName: "function maxDepth(",
};
