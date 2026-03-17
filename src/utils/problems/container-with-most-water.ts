import { Problem } from "../types/problem";

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "6. Container With Most Water",
  order: 6,
  difficulty: "Medium",
  problemStatement: `<p>You are given an integer array <code>height</code>. Return the maximum amount of water a container can store.</p>`,
  examples: [
    { id: 1, inputText: "height = [1,8,6,2,5,4,8,3,7]", outputText: "49" },
    { id: 2, inputText: "height = [1,1]", outputText: "1" },
  ],
  constraints: `<li>2 ≤ height.length ≤ 10⁵</li><li>0 ≤ height[i] ≤ 10⁴</li>`,
  starterCode: {
    javascript: `function maxArea(height) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n    }\n}`,
    c: `int maxArea(int* height, int heightSize) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "maxArea",
  explanation: `
    <div class="space-y-4">
        <p>The objective is to find two lines that, together with the x-axis, form a container that holds the most water. The amount of water is limited by the <b>shorter</b> of the two lines.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Two Pointers</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Place two pointers: <code>left</code> at the beginning (index 0) and <code>right</code> at the end of the array.</li>
            <li>Calculate the area: <code>width * min(height[left], height[right])</code>.</li>
            <li>Update your <code>maxArea</code> if the current area is larger.</li>
            <li><b>Key Strategy:</b> To potentially find a larger area, move the pointer pointing to the <b>shorter line</b>. Moving the taller line's pointer would only decrease the width without any chance of increasing the height limit.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(1)</p>
    </div>
  `,
};