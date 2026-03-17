import { Problem } from "../types/problem";

export const jumpGame: Problem = {
  id: "jump-game",
  title: "3. Jump Game",
  order: 3,
  difficulty: "Medium",
  problemStatement: `<p>You are given an array <code>nums</code>. Each element represents max jump length.</p><p>Return true if you can reach the last index.</p>`,
  examples: [
    { id: 1, inputText: "nums = [2,3,1,1,4]", outputText: "true" },
    { id: 2, inputText: "nums = [3,2,1,0,4]", outputText: "false" },
  ],
  constraints: `<li>1 ≤ nums.length ≤ 10⁴</li>`,
  starterCode: {
    javascript: `function canJump(nums) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n    }\n}`,
    c: `bool canJump(int* nums, int numsSize) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "canJump",
  explanation: `
    <div class="space-y-4">
        <p>The challenge is to determine if you can reach the final index of an array based on the maximum jump length specified at each position. While this can be solved with Dynamic Programming, a <b>Greedy</b> approach is more efficient.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Greedy Strategy</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Initialize a <code>goal</code> variable to the last index of the array (<code>nums.length - 1</code>).</li>
            <li>Iterate through the array <b>backward</b>, starting from the second-to-last element.</li>
            <li>At each index <code>i</code>, check if the current index plus its maximum jump length (<code>i + nums[i]</code>) can reach or pass the current <code>goal</code>.</li>
            <li>If it can, it means the current index <code>i</code> is now a "safe" position to reach the end. Update the <code>goal</code> to the current index <code>i</code>.</li>
            <li>After the loop, check if the <code>goal</code> has moved all the way back to the start (index <code>0</code>). If so, return <code>true</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(1).</p>
    </div>
  `,
};