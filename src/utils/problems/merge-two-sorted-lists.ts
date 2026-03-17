import { Problem } from "../types/problem";

export const mergeTwoLists: Problem = {
    id: "merge-two-sorted-lists",
    title: "14. Merge Two Sorted Lists",
    order: 14,
    difficulty: "Easy",

    problemStatement: `
<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>
<p>Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.</p>
<p>Return the head of the merged linked list.</p>
`,
    examples: [
        {
            id: 1,
            inputText: "list1 = [1,2,4], list2 = [1,3,4]",
            outputText: "[1,1,2,3,4,4]",
        },
        {
            id: 2,
            inputText: "list1 = [], list2 = []",
            outputText: "[]",
        },
    ],
    constraints: `
<li>The number of nodes in both lists is in the range [0, 50].</li>
<li>-100 ≤ Node.val ≤ 100</li>
<li>Both list1 and list2 are sorted in non-decreasing order.</li>
`,
    starterCode: {
    javascript: `function mergeTwoLists(list1, list2) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your code here\n    }\n}`,
    c: `struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "mergeTwoLists",
  explanation: `
    <div class="space-y-4">
        <p>The objective is to combine two already sorted linked lists into a single sorted linked list by effectively "splicing" the existing nodes together.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Iterative with Dummy Node</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Dummy Node:</b> Initialize a <code>dummy</code> node to act as the starting point of your new list. Use a <code>current</code> pointer to track the tail of this new list.</li>
            <li><b>Comparison Loop:</b> While both <code>list1</code> and <code>list2</code> are not null, compare their head values.</li>
            <li><b>Splicing:</b> Attach the node with the smaller value to <code>current.next</code> and move that list's pointer forward. Move the <code>current</code> pointer forward as well.</li>
            <li><b>Remaining Nodes:</b> After the loop, if one list still has nodes remaining, simply attach the rest of that list to <code>current.next</code>.</li>
            <li><b>Return:</b> Return <code>dummy.next</code>, which points to the actual head of the merged list.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n + m) where n and m are the lengths of the lists. Space Complexity: O(1) as we are only using a few pointers.</p>
    </div>
  `,
};