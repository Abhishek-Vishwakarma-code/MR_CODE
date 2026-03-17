import { Problem } from "../types/problem";
import example1 from "./images/search-a-2d-1.jpg";
import example2 from "./images/search-a-2d-2.jpg";

export const search2DMatrix: Problem = {
  id: "search-a-2d-matrix",
  title: "5. Search a 2D Matrix",
  difficulty: "Medium",
  order: 5,
  problemStatement: `<p>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix.</p>`,
  examples: [
    { id: 0, inputText: `matrix = [[1,3,5],[7,9,11]], target = 3`, outputText: "true", img: example1.src },
    { id: 1, inputText: `matrix = [[1,3,5],[7,9,11]], target = 13`, outputText: "false", img: example2.src },
    { id: 2, inputText: `matrix = [[1]], target = 1`, outputText: "true" },
  ],
  constraints: `<li>1 ≤ m, n ≤ 100</li><li>-10⁴ ≤ matrix[i][j], target ≤ 10⁴</li>`,
  starterCode: {
    javascript: `function searchMatrix(matrix, target) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n    }\n}`,
    c: `bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "searchMatrix",
  explanation: `
    <div class="space-y-4">
        <p>Since every row is sorted and the first element of each row is greater than the last element of the previous row, the entire matrix can be viewed as one giant sorted 1D array.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Virtual 1D Binary Search</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Virtual Array:</b> Treat the <code>m x n</code> matrix as an array of length <code>m * n</code>.</li>
            <li><b>Binary Search:</b> Use standard pointers <code>low = 0</code> and <code>high = (m * n) - 1</code>.</li>
            <li><b>Mapping:</b> To find the 2D coordinates from a 1D index <code>mid</code>, use:
                <ul class="list-circle pl-5 mt-1">
                    <li><code>row = Math.floor(mid / n)</code></li>
                    <li><code>col = mid % n</code></li>
                </ul>
            </li>
            <li><b>Comparison:</b> Compare <code>matrix[row][col]</code> with the target and adjust <code>low</code> or <code>high</code> accordingly.</li>
            <li><b>Efficiency:</b> This allows you to find the element in logarithmic time without extra space.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(log(m * n)) | Space Complexity: O(1).</p>
    </div>
  `,
};