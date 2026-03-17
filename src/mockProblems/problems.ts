export type Problem = {
	id: string;
	title: string;
	difficulty: "Easy" | "Medium" | "Hard";
	category: string;
	order: number;
	// REMOVED: videoId field
	explanation: string; // NEW: The main documentation content
	problemStatement: string;
	examples: {
		id: number;
		inputText: string;
		outputText: string;
		explanation?: string; // This remains for specific example logic
		img?: string;
	}[];
	constraints: string;
	starterCode: {
		javascript: string;
		python: string;
		cpp: string;
		java: string;
		c: string;
	};
	starterFunctionName: string;
};

/**
 * DBProblemSummary omits large text blocks to keep the initial load fast.
 * We now omit the main 'explanation' field as well to keep the dashboard light.
 */
export type DBProblemSummary = Omit<
	Problem,
	"problemStatement" | "examples" | "constraints" | "starterCode" | "starterFunctionName" | "explanation"
>;

export const problems: DBProblemSummary[] = [
	// --- Phase 1: Core Algorithms (1-10) ---
	{ id: "two-sum", title: "1. Two Sum", difficulty: "Easy", category: "Array", order: 1 },
	{ id: "reverse-linked-list", title: "2. Reverse Linked List", difficulty: "Hard", category: "Linked List", order: 2 },
	{ id: "jump-game", title: "3. Jump Game", difficulty: "Medium", category: "Dynamic Programming", order: 3 },
	{ id: "valid-parentheses", title: "4. Valid Parentheses", difficulty: "Easy", category: "Stack", order: 4 },
	{ id: "search-a-2d-matrix", title: "5. Search a 2D Matrix", difficulty: "Medium", category: "Binary Search", order: 5 },
	{ id: "container-with-most-water", title: "6. Container With Most Water", difficulty: "Medium", category: "Two Pointers", order: 6 },
	{ id: "merge-intervals", title: "7. Merge Intervals", difficulty: "Medium", category: "Intervals", order: 7 },
	{ id: "maximum-depth-of-binary-tree", title: "8. Maximum Depth of Binary Tree", difficulty: "Easy", category: "Tree", order: 8 },
	{ id: "best-time-to-buy-and-sell-stock", title: "9. Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Array", order: 9 },
	{ id: "subsets", title: "10. Subsets", difficulty: "Medium", category: "Backtracking", order: 10 },

	// --- Phase 2: Standard Data Structures (11-14) ---
	{ id: "valid-anagram", title: "11. Valid Anagram", difficulty: "Easy", category: "String", order: 11 },
	{ id: "climbing-stairs", title: "12. Climbing Stairs", difficulty: "Easy", category: "Dynamic Programming", order: 12 },
	{ id: "product-of-array-except-self", title: "13. Product of Array Except Self", difficulty: "Medium", category: "Array", order: 13 },
	{ id: "merge-two-sorted-lists", title: "14. Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List", order: 14 },

	// --- Phase 3: Language-Specific Paradigms (15-22) ---
	{ id: "remove-element", title: "15. Remove Element", difficulty: "Easy", category: "Two Pointers", order: 15 },
	{ id: "find-index-first-occurrence", title: "16. Find the Index of the First Occurrence in a String", difficulty: "Easy", category: "Two Pointers", order: 16 },
	{ id: "sort-colors", title: "17. Sort Colors", difficulty: "Medium", category: "Sorting", order: 17 },
	{ id: "top-k-frequent-elements", title: "18. Top K Frequent Elements", difficulty: "Medium", category: "Heap / Priority Queue", order: 18 },
	{ id: "min-stack", title: "19. Min Stack", difficulty: "Medium", category: "Design", order: 19 },
	{ id: "implement-queue-using-stacks", title: "20. Implement Queue using Stacks", difficulty: "Easy", category: "Design", order: 20 },
	{ id: "intersection-of-two-arrays", title: "21. Intersection of Two Arrays", difficulty: "Easy", category: "Hash Table", order: 21 },
	{ id: "longest-consecutive-sequence", title: "22. Longest Consecutive Sequence", difficulty: "Medium", category: "Hash Table", order: 22 }
];