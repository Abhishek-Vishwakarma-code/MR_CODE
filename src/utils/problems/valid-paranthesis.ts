import { Problem } from "../types/problem";

export const validParentheses: Problem = {
  id: "valid-parentheses",
  title: "4. Valid Parentheses",
  order: 4,
  difficulty: "Easy",

  problemStatement: `
<p>Determine if parentheses are valid.</p>
`,

  examples: [
    { id: 1, inputText: 's = "()"', outputText: "true" },
    { id: 2, inputText: 's = "(]"', outputText: "false" },
  ],

  constraints: `<li>Only ()[]{} allowed</li>`,

  starterCode: `function validParentheses(s) {
  // Write your code here
};`,
  starterFunctionName: "function validParentheses(",
};
