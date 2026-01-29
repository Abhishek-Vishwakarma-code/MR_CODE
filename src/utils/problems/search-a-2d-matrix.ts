// import assert from "assert";
// import { Problem } from "../types/problem";
// import example1 from "./images/search-a-2d-1.jpg";
// import example2 from "./images/search-a-2d-2.jpg";

// export const search2DMatrixHandler = (fn: any) => {
// 	try {
// 		const tests = [
// 			{
// 				matrix: [
// 					[1, 3, 5, 7],
// 					[10, 11, 16, 20],
// 					[23, 30, 34, 60],
// 				],
// 				target: 3,
// 			},
// 			{
// 				matrix: [
// 					[1, 3, 5, 7],
// 					[10, 11, 16, 20],
// 					[23, 30, 34, 60],
// 				],
// 				target: 13,
// 			},
// 		];
// 		const answers = [true, false];
// 		for (let i = 0; i < tests.length; i++) {
// 			const result = fn(tests[i].matrix, tests[i].target);
// 			assert.deepEqual(result, answers[i]);
// 		}
// 		return true;
// 	} catch (error: any) {
// 		console.log("Error from searchA2DMatrixHandler: ", error);
// 		throw new Error(error);
// 	}
// };
// const starterCodeSearch2DMatrixJS = `// Do not edit function name
// function searchMatrix(matrix, target) {
//   // Write your code here
// };`;

// export const search2DMatrix: Problem = {
// 	id: "search-a-2d-matrix",
// 	title: "5. Search a 2D Matrix",
// 	problemStatement: `
//   <p class='mt-3'>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>
//     <li class="mt-3">Integers in each row are sorted from left to right.</li>
//     <li class="mt-3">The first integer of each row is greater than the last integer of the previous row.</li>
//   <p class='mt-3'>Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.</p>
//   `,
// 	examples: [
// 		{
// 			id: 0,
// 			inputText: `matrix = [
//   [1,3,5,7],
//   [10,11,16,20],
//   [23,30,34,60]
// ], target = 3`,
// 			outputText: `true`,
// 			img: example1.src,
// 		},
// 		{
// 			id: 1,
// 			inputText: `matrix = [
//   [1,3,5,7],
//   [10,11,16,20],
//   [23,30,34,60]
// ], target = 13`,
// 			outputText: `false`,
// 			img: example2.src,
// 		},
// 		{
// 			id: 2,
// 			inputText: `matrix = [[1]], target = 1`,
// 			outputText: `true`,
// 		},
// 	],
// 	constraints: `
//   <li class='mt-2'><code>m == matrix.length</code></li>
//   <li class='mt-2'><code>n == matrix[i].length</code></li>
//   <li class='mt-2'><code>1 <= m, n <= 100</code></li>
//   <li class='mt-2'><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>
//   `,
// 	starterCode: starterCodeSearch2DMatrixJS,
// 	handlerFunction: "search2DMatrixHandler",
// 	starterFunctionName: "function searchMatrix",
// 	order: 5,
// 	difficulty: undefined
// };
// import { Problem } from "../types/problem";

// export const search2DMatrix: Problem = {
//   id: "search-a-2d-matrix",
//   title: "5. Search a 2D Matrix",
//   order: 5,
//   difficulty: "Medium",

//   problemStatement: `
// <p>Search for a value in a sorted 2D matrix.</p>
// `,

//   examples: [
//     { id: 1, inputText: "target = 3", outputText: "true" },
//     { id: 2, inputText: "target = 13", outputText: "false" },
//   ],

//   constraints: `<li>m,n ≤ 100</li>`,

//   starterCode: `function searchMatrix(matrix, target) {
//   // Write your code here
// };`,
//   starterFunctionName: "function searchMatrix(",
// };
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
