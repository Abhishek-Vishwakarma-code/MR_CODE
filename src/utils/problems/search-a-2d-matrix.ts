import { Problem } from "../types/problem";
import example1 from "./images/search-a-2d-1.jpg";
import example2 from "./images/search-a-2d-2.jpg";

export const search2DMatrix: Problem = {
  id: "search-a-2d-matrix",
  title: "5. Search a 2D Matrix",
  difficulty: "Medium", // ✅ FIXED
  order: 5,

  problemStatement: `
<p>
Write an efficient algorithm that searches for a value in an
<code>m x n</code> matrix.
</p>
<ul>
<li>Integers in each row are sorted from left to right.</li>
<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>
<p>
Given <code>matrix</code> and <code>target</code>, return <code>true</code> or <code>false</code>.
</p>
`,

  examples: [
    {
      id: 0,
      inputText: `matrix = [[1,3,5],[7,9,11]], target = 3`,
      outputText: "true",
      img: example1.src, // ✅ FIXED
    },
    {
      id: 1,
      inputText: `matrix = [[1,3,5],[7,9,11]], target = 13`,
      outputText: "false",
      img: example2.src, // ✅ FIXED
    },
    {
      id: 2,
      inputText: `matrix = [[1]], target = 1`,
      outputText: "true",
    },
  ],

  constraints: `
<li>1 ≤ m, n ≤ 100</li>
<li>-10⁴ ≤ matrix[i][j], target ≤ 10⁴</li>
`,

  starterCode: `function searchMatrix(matrix, target) {
  // Write your code here
};`,

  starterFunctionName: "function searchMatrix(",
};
