import { Problem } from "../types/problem";

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum",
  difficulty: "Easy",
  order: 1,

  problemStatement: `
<p>
Given an array of integers <code>nums</code> and an integer <code>target</code>,
return indices of the two numbers such that they add up to <code>target</code>.
</p>
<p>
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
</p>
<p>You can return the answer in any order.</p>
`,

  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation:
        "Because nums[0] + nums[1] == 9, we return [0,1].",
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]",
      explanation:
        "Because nums[1] + nums[2] == 6, we return [1,2].",
    },
    {
      id: 3,
      inputText: "nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],

  constraints: `
<li>2 ≤ nums.length ≤ 10</li>
<li>-10 ≤ nums[i] ≤ 10</li>
<li>-10 ≤ target ≤ 10</li>
<li><strong>Only one valid answer exists.</strong></li>
`,

  starterCode: {
    javascript: `function twoSum(nums, target) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}`,
    c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "twoSum",
  explanation: `
    <div class="space-y-4">
        <p>The goal is to find two numbers that add up to a <b>target</b>. Using a <b>Hash Map</b> allows us to solve this in a single pass.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic:</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Iterate through the array. Calculate the <code>complement</code> (target - current value).</li>
            <li>If the <code>complement</code> is in your map, return those indices.</li>
            <li>Otherwise, save the current number and index in the map.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n)</p>
    </div>
  `,
};
