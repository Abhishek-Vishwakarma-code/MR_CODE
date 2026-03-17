import { Problem } from "../types/problem";

export const sortColors: Problem = {
    id: "sort-colors",
    title: "17. Sort Colors",
    order: 17,
    difficulty: "Medium",
    category: "Sorting",
    problemStatement: `
<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong>in-place</strong> so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p>
<p>We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.</p>
<p>You must solve this problem without using the library's sort function.</p>
`,
    examples: [
        { id: 1, inputText: "nums = [2,0,2,1,1,0]", outputText: "[0,0,1,1,2,2]" },
        { id: 2, inputText: "nums = [2,0,1]", outputText: "[0,1,2]" },
    ],
    constraints: `<li>n == nums.length</li><li>1 ≤ n ≤ 300</li><li><code>nums[i]</code> is either 0, 1, or 2.</li>`,
    starterCode: {
        javascript: `function sortColors(nums) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n    }\n}`,
        c: `void sortColors(int* nums, int numsSize) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "sortColors",
    explanation: `
    <div class="space-y-4">
        <p>This problem is a classic variation of the <b>Dutch National Flag</b> problem. Since there are only three distinct values (0, 1, and 2), we can sort the array in a <b>single pass</b> using three pointers.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Three-Pointer Partitioning</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Pointers:</b> Initialize three pointers: <code>low</code> at the start (index 0), <code>mid</code> at the start (index 0), and <code>high</code> at the end of the array.</li>
            <li><b>Red (0):</b> If <code>nums[mid]</code> is 0, swap it with <code>nums[low]</code>. Increment both <code>low</code> and <code>mid</code>. This ensures all 0s are pushed to the beginning.</li>
            <li><b>White (1):</b> If <code>nums[mid]</code> is 1, no swap is needed. Just increment <code>mid</code>.</li>
            <li><b>Blue (2):</b> If <code>nums[mid]</code> is 2, swap it with <code>nums[high]</code>. Decrement <code>high</code>, but <b>do not</b> increment <code>mid</code> yet, as the new value swapped from the end needs to be checked.</li>
            <li><b>Termination:</b> The process continues as long as <code>mid <= high</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(1).</p>
    </div>
  `,
};