import { Problem } from "../types/problem";

export const subsets: Problem = {
  id: "subsets",
  title: "10. Subsets",
  order: 10,
  difficulty: "Medium",
  problemStatement: `<p>Given an integer array <code>nums</code>, return all possible subsets.</p>`,
  examples: [
    { id: 1, inputText: "nums = [1,2,3]", outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
    { id: 2, inputText: "nums = [0]", outputText: "[[],[0]]" },
  ],
  constraints: `<li>1 ≤ nums.length ≤ 10</li><li>-10 ≤ nums[i] ≤ 10</li>`,
  starterCode: {
    javascript: `function subsets(nums) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your code here\n    }\n}`,
    c: `int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "subsets",
  explanation: `
    <div class="space-y-4">
        <p>Finding all subsets (also known as the Power Set) is a foundational problem in combinatorics. Since each element can either be <b>included</b> or <b>excluded</b>, there are always $2^n$ possible subsets for a set of size $n$.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Cascading Backtracking</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Decision Tree:</b> At each step of the recursion, you decide whether to include the current element <code>nums[i]</code> in the subset or skip it.</li>
            <li><b>Base Case:</b> When the index <code>i</code> reaches the end of the array (<code>nums.length</code>), you have formed a complete subset. Push a copy of this subset into your result list.</li>
            <li><b>The Process:</b>
                <ul class="list-circle pl-5 mt-1">
                    <li>Include the current element and move to the next index.</li>
                    <li>Backtrack by removing the current element and moving to the next index without it.</li>
                </ul>
            </li>
            <li><b>Result:</b> This exploration of the state-space tree ensures every possible combination, including the <b>empty set</b>, is captured.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n * 2^n) | Space Complexity: O(n) for the recursion stack.</p>
    </div>
  `,
};