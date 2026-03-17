import { Problem } from "../types/problem";
import example from "./images/reverseLL.jpg";

export const reverseLinkedList: Problem = {
  id: "reverse-linked-list",
  title: "2. Reverse Linked List",
  difficulty: "Hard",
  order: 2,
  problemStatement: `<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>`,
  examples: [
    { id: 0, inputText: "head = [1,2,3,4,5]", outputText: "[5,4,3,2,1]", img: example.src },
    { id: 1, inputText: "head = [1,2,3]", outputText: "[3,2,1]" },
    { id: 2, inputText: "head = [1]", outputText: "[1]" },
  ],
  constraints: `<li>The number of nodes in the list is in the range [0, 5000].</li><li>-5000 ≤ Node.val ≤ 5000</li>`,
  starterCode: {
    javascript: `function reverseList(head) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write your code here\n    }\n}`,
    c: `struct ListNode* reverseList(struct ListNode* head) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "reverseList",
  explanation: `
    <div class="space-y-4">
        <p>Reversing a singly linked list involves flipping the <code>next</code> pointer of every node to point to the previous node instead of the following one.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Iterative Three-Pointer Approach</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Initialization:</b> Maintain two primary pointers: <code>prev</code> (initially <code>null</code>) and <code>curr</code> (starting at the <code>head</code>).</li>
            <li><b>Traverse:</b> Iterate through the list until the <code>curr</code> pointer reaches <code>null</code>.</li>
            <li><b>Save Next:</b> Inside the loop, temporarily store the original next node: <code>nextTemp = curr.next</code> to avoid losing the rest of the list.</li>
            <li><b>Reverse Pointer:</b> Flip the current node's direction: <code>curr.next = prev</code>.</li>
            <li><b>Shift Pointers:</b> Move <code>prev</code> to the current node and <code>curr</code> to the saved <code>nextTemp</code>.</li>
            <li><b>Return:</b> Once <code>curr</code> is null, the <code>prev</code> pointer will be at the new head of the reversed list. Return <code>prev</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) as we visit each node once. Space Complexity: O(1) as we only use a few pointers.</p>
    </div>
  `,
};