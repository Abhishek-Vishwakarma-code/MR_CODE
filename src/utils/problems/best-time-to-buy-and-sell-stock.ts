import { Problem } from "../types/problem";

export const bestTimeToBuyAndSellStock: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "9. Best Time to Buy and Sell Stock",
  order: 9,
  difficulty: "Easy",
  category: "Array", // Added category to keep it consistent with your other problems
  problemStatement: `
<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
<p>You want to maximize your profit by choosing a <b>single day</b> to buy one stock and choosing a <b>different day in the future</b> to sell that stock.</p>
<p>Return <i>the maximum profit you can achieve from this transaction</i>. If you cannot achieve any profit, return <code>0</code>.</p>
`,
  examples: [
    {
      id: 1,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    },
    {
      id: 2,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
      explanation: "In this case, no transactions are done and the max profit = 0.",
    },
  ],
  constraints: `
<li>1 ≤ prices.length ≤ 10⁵</li>
<li>0 ≤ prices[i] ≤ 10⁴</li>
`,
  starterCode: {
    javascript: `/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n  // Write your code here\n};`,
    python: `class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n        pass`,
    cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        \n    }\n};`,
    java: `class Solution {\n    public int maxProfit(int[] prices) {\n        \n    }\n}`,
    c: `int maxProfit(int* prices, int pricesSize) {\n    \n}`,
  },
  starterFunctionName: "maxProfit",
  // Simplified to just the function name for your test runner
  explanation: `
    <div class="space-y-4">
        <p>To maximize profit, you must buy at the lowest possible price and sell at the highest possible price <b>after</b> that buy date.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic:</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li>Track the <code>minPrice</code> seen so far.</li>
            <li>For every new price, calculate the potential profit (current price - minPrice).</li>
            <li>Keep track of the <code>maxProfit</code> found across all days.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(n) | Space Complexity: O(1)</p>
    </div>
  `,
};