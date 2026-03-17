import { Problem } from "../types/problem";

export const removeElement: Problem = {
    id: "remove-element",
    title: "15. Remove Element",
    order: 15,
    difficulty: "Easy",
    category: "Two Pointers",
    problemStatement: `
<p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <strong>in-place</strong>. The order of the elements may be changed. Then return the number of elements in <code>nums</code> which are not equal to <code>val</code>.</p>
<p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:</p>
<ul>
<li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
<li>Return <code>k</code>.</li>
</ul>
`,
    examples: [
        { id: 1, inputText: "nums = [3,2,2,3], val = 3", outputText: "2, nums = [2,2,_,_]" },
        { id: 2, inputText: "nums = [0,1,2,2,3,0,4,2], val = 2", outputText: "5, nums = [0,1,4,0,3,_,_,_]" },
    ],
    constraints: `<li>0 ≤ nums.length ≤ 100</li><li>0 ≤ nums[i] ≤ 50</li><li>0 ≤ val ≤ 100</li>`,
    starterCode: {
        javascript: `function removeElement(nums, val) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n    }\n}`,
        c: `int removeElement(int* nums, int numsSize, int val) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "removeElement",
    explanation: `
    <div class="space-y-4">
        <p>The requirement to modify the array <b>in-place</b> means we cannot create a new array. Instead, we must rearrange the existing elements so that all elements not equal to <code>val</code> are shifted to the front.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Two Pointers</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Pointer <code>k</code>:</b> Initialize a pointer <code>k</code> at index <code>0</code>. This pointer will keep track of the position where the next element not equal to <code>val</code> should be placed.</li>
            <li><b>Iteration:</b> Iterate through the array using a loop variable <code>i</code> from <code>0</code> to <code>nums.length - 1</code>.</li>
            <li><b>Filtering:</b> In each step, check if <code>nums[i]</code> is <b>not equal</b> to <code>val</code>.</li>
            <li><b>Overwriting:</b> If <code>nums[i] !== val</code>, copy the value at <code>nums[i]</code> to <code>nums[k]</code> and increment <code>k</code>. This effectively overwrites the occurrences of <code>val</code> as we move along.</li>
            <li><b>Return:</b> After the loop finishes, <code>k</code> represents the total number of elements that are not equal to <code>val</code>. Return <code>k</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) as we visit each element once. Space Complexity: O(1) because we modify the array in-place.</p>
    </div>
  `,
};