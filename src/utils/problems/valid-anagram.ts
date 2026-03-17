import { Problem } from "../types/problem";

export const validAnagram: Problem = {
    id: "valid-anagram",
    title: "11. Valid Anagram",
    order: 11,
    difficulty: "Easy",

    problemStatement: `
<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>
<p>An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>
`,
    examples: [
        {
            id: 1,
            inputText: 's = "anagram", t = "nagaram"',
            outputText: "true",
        },
        {
            id: 2,
            inputText: 's = "rat", t = "car"',
            outputText: "false",
        },
    ],
    constraints: `
<li>1 ≤ s.length, t.length ≤ 5 * 10⁴</li>
<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
`,
    starterCode: {
    javascript: `function isAnagram(s, t) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n    }\n};`,
    java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n    }\n}`,
    c: `bool isAnagram(char* s, char* t) {\n    // Write your code here\n}`,
  },
  starterFunctionName: "isAnagram",
  explanation: `
    <div class="space-y-4">
        <p>To determine if two strings are anagrams, we need to verify that they contain the exact same characters with the exact same frequencies.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Character Frequency Counting</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Length Check:</b> First, if the lengths of <code>s</code> and <code>t</code> are different, they cannot be anagrams. Return <code>false</code> immediately.</li>
            <li><b>Hash Map / Array:</b> Create a frequency map (or an array of size 26 for English letters) to store the counts of each character.</li>
            <li><b>Incrementing:</b> Iterate through string <code>s</code> and increment the count for each character encountered.</li>
            <li><b>Decrementing:</b> Iterate through string <code>t</code> and decrement the count for each character.</li>
            <li><b>Verification:</b> After both iterations, check if all values in your frequency map/array are zero. If any value is non-zero, the strings are not anagrams.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) where n is the length of the string. Space Complexity: O(1) if using a fixed-size array of 26.</p>
    </div>
  `,
};