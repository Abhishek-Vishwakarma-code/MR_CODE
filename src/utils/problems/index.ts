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

export const problems: Record<string, any> = {
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
}
