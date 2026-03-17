import { Problem } from "../types/problem";

export const climbingStairs: Problem = {
    id: "climbing-stairs",
    title: "12. Climbing Stairs",
    order: 12,
    difficulty: "Easy",

    problemStatement: `
<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>
<p>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>
`,
    examples: [
        {
            id: 1,
            inputText: "n = 2",
            outputText: "2",
            explanation: "There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps"
        },
        {
            id: 2,
            inputText: "n = 3",
            outputText: "3",
            explanation: "There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step"
        },
    ],
    constraints: `<li>1 ≤ n ≤ 45</li>`,
    starterCode: {
    javascript: `function climbStairs(n) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}`,
    c: `int climbStairs(int n) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "climbStairs",
  explanation: `
    <div class="space-y-4">
        <p>This problem follows the <b>Fibonacci Sequence</b>. To reach step <i>n</i>, you could only have come from step <i>n-1</i> or <i>n-2</i>.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic:</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Base Cases: 1 step = 1 way; 2 steps = 2 ways.</li>
            <li>Total ways for step <i>n</i> = <code>ways(n-1) + ways(n-2)</code>.</li>
            <li>Instead of recursion, use an iterative approach to save memory.</li>
        </ul>
    </div>
  `,
};