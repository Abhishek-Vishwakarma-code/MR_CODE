import { Problem } from "../types/problem";

export const productExceptSelf: Problem = {
    id: "product-of-array-except-self",
    title: "13. Product of Array Except Self",
    order: 13,
    difficulty: "Medium",

    problemStatement: `
<p>Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>.</p>
<p>You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.</p>
`,
    examples: [
        {
            id: 1,
            inputText: "nums = [1,2,3,4]",
            outputText: "[24,12,8,6]",
        },
        {
            id: 2,
            inputText: "nums = [-1,1,0,-3,3]",
            outputText: "[0,0,9,0,0]",
        },
    ],
    constraints: `
<li>2 ≤ nums.length ≤ 10⁵</li>
<li>-30 ≤ nums[i] ≤ 30</li>
`,
    starterCode: {
        javascript: `function productExceptSelf(nums) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n    }\n}`,
        c: `int* productExceptSelf(int* nums, int numsSize, int* returnSize) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "productExceptSelf",
    explanation: `
    <div class="space-y-4">
        <p>The challenge is to calculate the product of every element except the one at the current index without using division. We can achieve this in <b>$O(n)$ time</b> by using <b>Prefix</b> and <b>Suffix</b> products.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Prefix and Suffix Pass</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Initialization:</b> Create an <code>answer</code> array of the same length as <code>nums</code>.</li>
            <li><b>Prefix Pass:</b> Iterate through the array from left to right. For each index <code>i</code>, store the product of all elements to its left in <code>answer[i]</code>. You can track this using a running <code>prefix</code> variable.</li>
            <li><b>Suffix Pass:</b> Iterate through the array again, but this time from right to left. Track a running <code>suffix</code> variable representing the product of all elements to the right of the current index.</li>
            <li><b>Final Calculation:</b> Multiply the existing value in <code>answer[i]</code> (the prefix) by the current <code>suffix</code> value.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) as we traverse the array twice. Space Complexity: O(1) if we don't count the output array.</p>
    </div>
  `,
};