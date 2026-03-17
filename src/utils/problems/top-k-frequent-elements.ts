import { Problem } from "../types/problem";

export const topKFrequent: Problem = {
    id: "top-k-frequent-elements",
    title: "18. Top K Frequent Elements",
    order: 18,
    difficulty: "Medium",
    category: "Heap / Priority Queue",
    problemStatement: `
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements. You may return the answer in <strong>any order</strong>.</p>
<p><em>(Hint: This is a classic C++ problem showcasing <code>std::priority_queue</code> and <code>std::unordered_map</code>).</em></p>
`,
    examples: [
        { id: 1, inputText: "nums = [1,1,1,2,2,3], k = 2", outputText: "[1,2]" },
        { id: 2, inputText: "nums = [1], k = 1", outputText: "[1]" },
    ],
    constraints: `<li>1 ≤ nums.length ≤ 10⁵</li><li>-10⁴ ≤ nums[i] ≤ 10⁴</li><li><code>k</code> is in the range [1, the number of unique elements in the array].</li>`,
    starterCode: {
        javascript: `function topKFrequent(nums, k) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n    }\n}`,
        c: `int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "topKFrequent",
    explanation: `
    <div class="space-y-4">
        <p>To find the <code>k</code> most frequent elements, we first need to count how many times each number appears and then identify the top candidates.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Frequency Map & Heap</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Step 1: Frequency Map:</b> Create a Hash Map (or unordered_map) to store the frequency of each element in the array. This takes $O(n)$ time.</li>
            <li><b>Step 2: Selection:</b> 
                <ul class="list-circle pl-5 mt-1">
                    <li><b>Heap Approach:</b> Use a <b>Min-Heap</b> of size <code>k</code> to store elements based on their frequencies. If the heap size exceeds <code>k</code>, pop the least frequent element. This results in $O(n \\log k)$ time.</li>
                    <li><b>Bucket Sort Approach:</b> Alternatively, use an array where the index represents the frequency and the value is a list of numbers with that frequency. This can achieve $O(n)$ time.</li>
                </ul>
            </li>
            <li><b>Final Step:</b> Extract the <code>k</code> elements from the heap or traverse the buckets from highest frequency to lowest to collect the result.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n log k) using a heap, or O(n) using bucket sort. Space Complexity: O(n).</p>
    </div>
  `,
};