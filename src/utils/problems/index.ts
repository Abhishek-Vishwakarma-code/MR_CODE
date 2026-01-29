// import { Problem } from "../types/problem";
// import { twoSum } from "./two-sum";
// import { jumpGame } from "./jump-games";
// import { reverseLinkedList } from "./reverse-linked-list";
// import { search2DMatrix } from "./search-a-2d-matrix";
// import { validParentheses } from "./valid-paranthesis";

// export const problems: Record<string, Problem> = {
// 	[twoSum.id]: twoSum,
// 	[jumpGame.id]: jumpGame,
// 	[reverseLinkedList.id]: reverseLinkedList,
// 	[search2DMatrix.id]: search2DMatrix,
// 	[validParentheses.id]: validParentheses,
// };
import { twoSum } from "./two-sum";
import { jumpGame } from "./jump-games";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { validParentheses } from "./valid-paranthesis";

export const problems: Record<string, any> = {
  "two-sum": twoSum,
  "jump-game": jumpGame,
  "reverse-linked-list": reverseLinkedList,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
};
