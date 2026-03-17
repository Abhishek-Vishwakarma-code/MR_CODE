import { Problem } from "../types/problem";

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "7. Merge Intervals",
  order: 7,
  difficulty: "Medium",
  problemStatement: `<p>Given an array of intervals, merge all overlapping intervals.</p>`,
  examples: [
    { id: 1, inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]", outputText: "[[1,6],[8,10],[15,18]]" },
    { id: 2, inputText: "intervals = [[1,4],[4,5]]", outputText: "[[1,5]]" },
  ],
  constraints: `<li>1 ≤ intervals.length ≤ 10⁴</li><li>intervals[i].length == 2</li>`,
  starterCode: {
    javascript: `function merge(intervals) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n    }\n}`,
    c: `int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "merge",
  explanation: `
    <div class="space-y-4">
        <p>To merge overlapping intervals effectively, we need to ensure that they are processed in a predictable order. The key is to compare the <b>end</b> of one interval with the <b>start</b> of the next.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Sort and Merge</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Sort:</b> First, sort the intervals based on their <b>starting values</b>. This ensures that potentially overlapping intervals are adjacent to each other.</li>
            <li><b>Initialize:</b> Create a <code>merged</code> array and push the first interval into it.</li>
            <li><b>Iterate:</b> Traverse the sorted intervals starting from the second one. For each interval, compare its <b>start</b> with the <b>end</b> of the last interval added to <code>merged</code>.</li>
            <li><b>Overlap Check:</b> If the current interval's start is less than or equal to the previous interval's end, they overlap. Merge them by updating the end of the previous interval to be <code>max(previousEnd, currentEnd)</code>.</li>
            <li><b>No Overlap:</b> If they don't overlap, simply push the current interval into the <code>merged</code> array.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n log n) due to sorting. Space Complexity: O(n) or O(log n) depending on the sorting implementation.</p>
    </div>
  `,
};