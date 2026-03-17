// --- Imports ---
import { twoSum } from "./two-sum";
import { jumpGame } from "./jump-games";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { validParentheses } from "./valid-paranthesis";
import { subsets } from "./subsets";
import { mergeIntervals } from "./merge-intervals";
import { maximumDepthOfBinaryTree } from "./maximum-depth-of-binary-tree";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-and-sell-stock";
import { containerWithMostWater } from "./container-with-most-water";
import { validAnagram } from "./valid-anagram";
import { climbingStairs } from "./climbing-stairs";
import { productExceptSelf } from "./product-of-array-except-self";
import { mergeTwoLists } from "./merge-two-sorted-lists";
import { removeElement } from "./remove-element";
import { findIndexFirstOccurrence } from "./find-index-first-occurrence";
import { sortColors } from "./sort-colors";
import { topKFrequent } from "./top-k-frequent-elements";
import { minStack } from "./min-stack";
import { implementQueueUsingStacks } from "./implement-queue-using-stacks";
import { intersectionOfTwoArrays } from "./intersection-of-two-arrays";
import { longestConsecutiveSequence } from "./longest-consecutive-sequence";

// --- Integrated Export ---
export const problems: Record<string, any> = {
  // Core DSA (1-10)
  "two-sum": twoSum,
  "jump-game": jumpGame,
  "reverse-linked-list": reverseLinkedList,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "container-with-most-water": containerWithMostWater,
  "best-time-to-buy-and-sell-stock": bestTimeToBuyAndSellStock,
  "maximum-depth-of-binary-tree": maximumDepthOfBinaryTree,
  "merge-intervals": mergeIntervals,
  "subsets": subsets,

  // Standard DSA (11-14)
  "valid-anagram": validAnagram,
  "climbing-stairs": climbingStairs,
  "product-of-array-except-self": productExceptSelf,
  "merge-two-sorted-lists": mergeTwoLists,

  // Language-Specific Paradigms (15-22)
  "remove-element": removeElement,
  "find-index-first-occurrence": findIndexFirstOccurrence,
  "sort-colors": sortColors,
  "top-k-frequent-elements": topKFrequent,
  "min-stack": minStack,
  "implement-queue-using-stacks": implementQueueUsingStacks,
  "intersection-of-two-arrays": intersectionOfTwoArrays,
  "longest-consecutive-sequence": longestConsecutiveSequence,
};