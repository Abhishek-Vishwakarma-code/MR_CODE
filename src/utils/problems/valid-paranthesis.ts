import { Problem } from "../types/problem";

export const validParentheses: Problem = {
  id: "valid-parentheses",
  title: "4. Valid Parentheses",
  order: 4,
  difficulty: "Easy",
  problemStatement: `<p>Determine if parentheses are valid.</p>`,
  examples: [
    { id: 1, inputText: 's = "()"', outputText: "true" },
    { id: 2, inputText: 's = "(]"', outputText: "false" },
  ],
  constraints: `<li>Only ()[]{} allowed</li>`,
  starterCode: {
    javascript: `function isValid(s) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}`,
    c: `bool isValid(char* s) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "isValid",
  explanation: `
    <div class="space-y-4">
        <p>A string containing brackets is considered valid if open brackets are closed by the same type of brackets and are closed in the correct order. This is a classic application of the <b>Last-In-First-Out (LIFO)</b> principle.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Stack-Based Matching</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Initialization:</b> Create an empty <b>Stack</b> to keep track of opening brackets.</li>
            <li><b>Traversal:</b> Iterate through each character in the string.</li>
            <li><b>Opening Brackets:</b> If you encounter an opening bracket <code>'('</code>, <code>'{'</code>, or <code>'['</code>, push it onto the stack.</li>
            <li><b>Closing Brackets:</b> If you encounter a closing bracket:
                <ul class="list-circle pl-5 mt-1">
                    <li>Check if the stack is empty. If it is, the string is invalid because there's no matching opening bracket.</li>
                    <li>Pop the top element from the stack and check if it matches the current closing bracket type.</li>
                    <li>If they don't match (e.g., <code>'('</code> followed by <code>']'</code>), the string is invalid.</li>
                </ul>
            </li>
            <li><b>Final Check:</b> After processing the entire string, the string is valid only if the stack is <b>completely empty</b>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(n) to store the stack.</p>
    </div>
  `,
};