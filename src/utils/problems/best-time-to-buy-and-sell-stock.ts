import { Problem } from "../types/problem";

export const bestTimeToBuyAndSellStock: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "9. Best Time to Buy and Sell Stock",
  order: 9,
  difficulty: "Easy",

  problemStatement: `
<p>
You are given an array <code>prices</code>
where prices[i] is the price of a stock on day i.
</p>
<p>
Return the maximum profit you can achieve.
</p>
`,

  examples: [
    {
      id: 1,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
    },
    {
      id: 2,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
    },
  ],

  constraints: `
<li>1 ≤ prices.length ≤ 10⁵</li>
<li>0 ≤ prices[i] ≤ 10⁴</li>
`,

  starterCode: `function maxProfit(prices) {
  // Write your code here
};`,

  starterFunctionName: "function maxProfit(",
};
