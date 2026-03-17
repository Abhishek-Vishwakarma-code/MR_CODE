import { Problem } from "../types/problem";

export const minStack: Problem = {
    id: "min-stack",
    title: "19. Min Stack",
    order: 19,
    difficulty: "Medium",
    category: "Design",
    problemStatement: `
<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>
<p>Implement the <code>MinStack</code> class:</p>
<ul>
<li><code>MinStack()</code> initializes the stack object.</li>
<li><code>void push(int val)</code> pushes the element val onto the stack.</li>
<li><code>void pop()</code> removes the element on the top of the stack.</li>
<li><code>int top()</code> gets the top element of the stack.</li>
<li><code>int getMin()</code> retrieves the minimum element in the stack.</li>
</ul>
`,
    examples: [
        { id: 1, inputText: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', outputText: '[null,null,null,null,-3,null,0,-2]' },
    ],
    constraints: `<li>-2³¹ ≤ val ≤ 2³¹ - 1</li><li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on non-empty stacks.</li>`,
    starterCode: {
        javascript: `class MinStack {\n  constructor() {\n    // Write your code here\n  }\n  push(val) {\n  }\n  pop() {\n  }\n  top() {\n  }\n  getMin() {\n  }\n}`,
        python: `class MinStack:\n    def __init__(self):\n        pass\n    def push(self, val: int) -> None:\n        pass\n    def pop(self) -> None:\n        pass\n    def top(self) -> int:\n        pass\n    def getMin(self) -> int:\n        pass`,
        cpp: `class MinStack {\npublic:\n    MinStack() {\n    }\n    void push(int val) {\n    }\n    void pop() {\n    }\n    int top() {\n    }\n    int getMin() {\n    }\n};`,
        java: `class MinStack {\n    public MinStack() {\n    }\n    public void push(int val) {\n    }\n    public void pop() {\n    }\n    public int top() {\n    }\n    public int getMin() {\n    }\n}`,
        c: `typedef struct {\n} MinStack;\nMinStack* minStackCreate() {\n}\nvoid minStackPush(MinStack* obj, int val) {\n}\nvoid minStackPop(MinStack* obj) {\n}\nint minStackTop(MinStack* obj) {\n}\nint minStackGetMin(MinStack* obj) {\n}`,
    },
    starterFunctionName: "MinStack",
    explanation: `
    <div class="space-y-4">
        <p>A standard stack supports $O(1)$ push and pop, but finding the minimum value typically requires $O(n)$ time. To achieve <b>constant time $O(1)$</b> for all operations, we can trade a bit of space for speed.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: The Auxiliary Min-Stack</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Two Stacks:</b> Maintain two internal stacks: a <code>mainStack</code> for standard LIFO data and a <code>minStack</code> specifically to track the minimum values.</li>
            <li><b>push(val):</b> Push the value onto the <code>mainStack</code>. For the <code>minStack</code>, push the smaller of the current value or the current top of the <code>minStack</code>.</li>
            <li><b>pop():</b> Pop from both the <code>mainStack</code> and the <code>minStack</code> to keep them synchronized.</li>
            <li><b>top():</b> Simply return the top element of the <code>mainStack</code>.</li>
            <li><b>getMin():</b> The current minimum of the entire stack is always sitting at the top of the <code>minStack</code>.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: O(1) for all operations. Space Complexity: O(n) to store the auxiliary min-stack.</p>
    </div>
  `,
};