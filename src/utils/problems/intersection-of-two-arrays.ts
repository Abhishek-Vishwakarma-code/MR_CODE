import { Problem } from "../types/problem";

export const intersectionOfTwoArrays: Problem = {
    id: "intersection-of-two-arrays",
    title: "21. Intersection of Two Arrays",
    order: 21,
    difficulty: "Easy",
    category: "Hash Table",
    problemStatement: `
<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return an array of their intersection. Each element in the result must be <strong>unique</strong> and you may return the result in <strong>any order</strong>.</p>
<p><em>(Hint: Python users can solve this in a single line using <code>set()</code> intersections!)</em></p>
`,
    examples: [
        { id: 1, inputText: "nums1 = [1,2,2,1], nums2 = [2,2]", outputText: "[2]" },
        { id: 2, inputText: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", outputText: "[9,4]" },
    ],
    constraints: `<li>1 ≤ nums1.length, nums2.length ≤ 1000</li><li>0 ≤ nums1[i], nums2[i] ≤ 1000</li>`,
    starterCode: {
        javascript: `function intersection(nums1, nums2) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}`,
        c: `int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "intersection",
    explanation: `
    <div class="space-y-4">
        <p>The intersection of two arrays consists of elements that appear in both arrays. A key requirement for this problem is that each element in the resulting intersection must be <b>unique</b>.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Hash Set Optimization</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Convert the first array <code>nums1</code> into a <b>Hash Set</b>. This automatically removes duplicates and provides $O(1)$ average time complexity for lookups.</li>
            <li>Initialize a second set (or an array that you later filter) to store the <b>result</b>.</li>
            <li>Iterate through <code>nums2</code>. For each number, check if it exists in the <code>nums1</code> set.</li>
            <li>If the number is present, add it to your <b>result set</b>. Using a set for the result ensures that even if a number appears multiple times in <code>nums2</code>, it is only included once in the intersection.</li>
            <li>Return the final result as an array.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n + m) where n and m are the lengths of the two arrays. Space Complexity: O(n) to store the first set.</p>
    </div>
  `,
};
