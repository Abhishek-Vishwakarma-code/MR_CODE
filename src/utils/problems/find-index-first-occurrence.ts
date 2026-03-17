import { Problem } from "../types/problem";

export const findIndexFirstOccurrence: Problem = {
    id: "find-index-first-occurrence",
    title: "16. Find the Index of the First Occurrence in a String",
    order: 16,
    difficulty: "Easy",
    category: "Two Pointers",
    problemStatement: `
<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>
<p><em>(Hint: In C, you would traditionally use pointer arithmetic or <code>strstr()</code> for this!)</em></p>
`,
    examples: [
        { id: 1, inputText: 'haystack = "sadbutsad", needle = "sad"', outputText: "0" },
        { id: 2, inputText: 'haystack = "leetcode", needle = "leeto"', outputText: "-1" },
    ],
    constraints: `<li>1 ≤ haystack.length, needle.length ≤ 10⁴</li><li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>`,
    starterCode: {
        javascript: `function strStr(haystack, needle) {\n  // Write your code here\n};`,
        python: `class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        # Write your code here\n        pass`,
        cpp: `class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        // Write your code here\n    }\n};`,
        java: `class Solution {\n    public int strStr(String haystack, String needle) {\n        // Write your code here\n    }\n}`,
        c: `int strStr(char* haystack, char* needle) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "strStr",
    explanation: `
    <div class="space-y-4">
        <p>The goal is to find the starting index of the first occurrence of <b>needle</b> within <b>haystack</b>. This is a classic string searching problem that can be solved using a <b>Sliding Window</b> approach.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Sliding Window</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Iterate through the <code>haystack</code> string using a loop variable <code>i</code>.</li>
            <li>The loop only needs to go up to <code>haystack.length - needle.length</code>, as any starting point after that wouldn't have enough characters left to match the needle.</li>
            <li>For each position <code>i</code>, check the substring of <code>haystack</code> starting at <code>i</code> with the same length as <code>needle</code>.</li>
            <li>If this substring matches <code>needle</code> exactly, return the current index <code>i</code>.</li>
            <li>If the loop completes without finding a match, return <code>-1</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n * m) where n is the length of haystack and m is the length of needle. Space Complexity: O(1).</p>
    </div>
  `,
};