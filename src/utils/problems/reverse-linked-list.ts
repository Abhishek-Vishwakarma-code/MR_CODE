import { Problem } from "../types/problem";
import example from "./images/reverseLL.jpg";

export const reverseLinkedList: Problem = {
  id: "reverse-linked-list",
  title: "2. Reverse Linked List",
  difficulty: "Hard", // ✅ FIXED
  order: 2,

  problemStatement: `
<p>
Given the <code>head</code> of a singly linked list, reverse the list,
and return <em>the reversed list</em>.
</p>
`,

  examples: [
    {
      id: 0,
      inputText: "head = [1,2,3,4,5]",
      outputText: "[5,4,3,2,1]",
      img: example.src, // ✅ FIXED (NO .src)
    },
    {
      id: 1,
      inputText: "head = [1,2,3]",
      outputText: "[3,2,1]",
    },
    {
      id: 2,
      inputText: "head = [1]",
      outputText: "[1]",
    },
  ],

  constraints: `
<li>The number of nodes in the list is in the range [0, 5000].</li>
<li>-5000 ≤ Node.val ≤ 5000</li>
`,

  starterCode: `function reverseLinkedList(head) {
  // Write your code here
};`,

  starterFunctionName: "function reverseLinkedList(",
};
