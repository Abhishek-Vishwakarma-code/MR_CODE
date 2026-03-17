import { Problem } from "../types/problem";

export const longestConsecutiveSequence: Problem = {
    id: "longest-consecutive-sequence",
    title: "22. Longest Consecutive Sequence",
    order: 22,
    difficulty: "Medium",
    category: "Hash Table",
    problemStatement: `
<p>Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence.</p>
<p>You must write an algorithm that runs in <code>O(n)</code> time.</p>
<p><em>(Hint: Achieving O(n) time is incredibly simple using Python's <code>in</code> operator on a Hash Set.)</em></p>
`,
    examples: [
        { id: 1, inputText: "nums = [100,4,200,1,3,2]", outputText: "4", explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4." },
        { id: 2, inputText: "nums = [0,3,7,2,5,8,4,6,0,1]", outputText: "9" },
    ],
    constraints: `<li>0 ≤ nums.length ≤ 10⁵</li><li>-10⁹ ≤ nums[i] ≤ 10⁹</li>`,
    starterCode: {
        javascript: `function longestConsecutive(nums) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n    }\n}`,
        c: `int longestConsecutive(int* nums, int numsSize) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "longestConsecutive",
    explanation: `
    <div class="space-y-4">
        <p>The goal is to find the longest sequence of consecutive integers in an unsorted array. While sorting the array would take $O(n \\log n)$, we can achieve <b>$O(n)$ time complexity</b> using a <b>Hash Set</b> for constant-time lookups.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Hash Set Sequence Identification</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Insert all numbers from the array into a <b>Hash Set</b> to eliminate duplicates and allow $O(1)$ lookups.</li>
            <li>Iterate through the array. For each number <code>n</code>, check if it is the <b>start</b> of a sequence.</li>
            <li>A number <code>n</code> is the start of a sequence if <code>n - 1</code> is <b>not</b> in the set.</li>
            <li>If <code>n</code> is a start, use a loop to check for <code>n + 1</code>, <code>n + 2</code>, and so on, until the sequence ends.</li>
            <li>Track the length of this current sequence and update your <code>longestSequence</code> variable if this one is larger.</li>
            <li>By only starting the inner loop for the first element of a sequence, each number is visited at most twice, maintaining linear time.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(n) to store the set.</p>
    </div>
  `,

};