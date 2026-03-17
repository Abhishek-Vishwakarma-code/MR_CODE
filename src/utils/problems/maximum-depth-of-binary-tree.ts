import { Problem } from "../types/problem";

export const maximumDepthOfBinaryTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "8. Maximum Depth of Binary Tree",
  order: 8,
  difficulty: "Easy",
  problemStatement: `<p>Given the root of a binary tree, return its maximum depth.</p>`,
  examples: [
    { id: 1, inputText: "root = [3,9,20,null,null,15,7]", outputText: "3" },
    { id: 2, inputText: "root = [1,null,2]", outputText: "2" },
  ],
  constraints: `<li>The number of nodes is in the range [0, 10⁴]</li>`,
  starterCode: {
    javascript: `function maxDepth(root) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your code here\n    }\n}`,
    c: `int maxDepth(struct TreeNode* root) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "maxDepth",
  explanation: `
    <div class="space-y-4">
        <p>The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node. This is a classic tree traversal problem.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Recursive DFS</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Base Case:</b> If the current node (root) is <code>null</code>, the depth is <code>0</code>.</li>
            <li><b>Recursive Step:</b> Recursively find the maximum depth of the <b>left</b> subtree and the <b>right</b> subtree.</li>
            <li><b>Result:</b> The depth of the current node is <code>1</code> (for the current level) plus the maximum of the depths of its two subtrees: <code>1 + max(maxDepth(left), maxDepth(right))</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) as we visit each node exactly once. Space Complexity: O(h) where h is the height of the tree, representing the recursion stack.</p>
    </div>
  `,
};