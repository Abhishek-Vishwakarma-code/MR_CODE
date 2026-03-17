import { Problem } from "../types/problem";

export const implementQueueUsingStacks: Problem = {
    id: "implement-queue-using-stacks",
    title: "20. Implement Queue using Stacks",
    order: 20,
    difficulty: "Easy",
    category: "Design",
    problemStatement: `
<p>Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (<code>push</code>, <code>peek</code>, <code>pop</code>, and <code>empty</code>).</p>
`,
    examples: [
        {
            id: 1,
            inputText: '["MyQueue", "push", "push", "peek", "pop", "empty"]\n[[], [1], [2], [], [], []]',
            outputText: '[null, null, null, 1, 1, false]'
        },
    ],
    constraints: `<li>1 ≤ x ≤ 9</li><li>At most 100 calls will be made to push, pop, peek, and empty.</li>`,
    starterCode: {
        javascript: `class MyQueue {\n  constructor() {\n    // Initialize your data structure here\n  }\n\n  push(x) {\n    // Write your code here\n  }\n\n  pop() {\n    // Write your code here\n  }\n\n  peek() {\n    // Write your code here\n  }\n\n  empty() {\n    // Write your code here\n  }\n}`,
        python: `class MyQueue:\n    def __init__(self):\n        # Initialize your data structure here\n        pass\n\n    def push(self, x: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> int:\n        # Write your code here\n        pass\n\n    def peek(self) -> int:\n        # Write your code here\n        pass\n\n    def empty(self) -> bool:\n        # Write your code here\n        pass`,
        cpp: `class MyQueue {\npublic:\n    MyQueue() {\n        // Initialize your data structure here\n    }\n    \n    void push(int x) {\n        // Write your code here\n    }\n    \n    int pop() {\n        // Write your code here\n    }\n    \n    int peek() {\n        // Write your code here\n    }\n    \n    bool empty() {\n        // Write your code here\n    }\n};`,
        java: `class MyQueue {\n    public MyQueue() {\n        // Initialize your data structure here\n    }\n\n    public void push(int x) {\n        // Write your code here\n    }\n\n    public int pop() {\n        // Write your code here\n    }\n\n    public int peek() {\n        // Write your code here\n    }\n\n    public boolean empty() {\n        // Write your code here\n    }\n}`,
        c: `typedef struct {\n    // Define your data structure here\n} MyQueue;\n\nMyQueue* myQueueCreate() {\n    // Initialize your data structure here\n}\n\nvoid myQueuePush(MyQueue* obj, int x) {\n    // Write your code here\n}\n\nint myQueuePop(MyQueue* obj) {\n    // Write your code here\n}\n\nint myQueuePeek(MyQueue* obj) {\n    // Write your code here\n}\n\nbool myQueueEmpty(MyQueue* obj) {\n    // Write your code here\n}`,
    },
    starterFunctionName: "MyQueue",
    explanation: `
    <div class="space-y-4">
        <p>A <b>Queue</b> is First-In-First-Out (FIFO), while a <b>Stack</b> is Last-In-First-Out (LIFO). To simulate a queue using two stacks, we use one stack for <b>input</b> and another for <b>output</b>.</p>
        <h3 class="text-xl font-bold text-[var(--brand-orange)]">The Logic: Two Stacks Approach</h3>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>push(x):</b> Simply push the element onto the <code>inputStack</code>. This is an $O(1)$ operation.</li>
            <li><b>pop():</b> If the <code>outputStack</code> is empty, transfer all elements from <code>inputStack</code> to <code>outputStack</code>. This process reverses the order of elements, making the oldest element accessible at the top. Then, pop from <code>outputStack</code>.</li>
            <li><b>peek():</b> Similar to <code>pop()</code>, if the <code>outputStack</code> is empty, transfer elements from the <code>inputStack</code>. Then, return the top element of <code>outputStack</code> without removing it.</li>
            <li><b>empty():</b> The queue is considered empty only if both the <code>inputStack</code> and <code>outputStack</code> contain no elements.</li>
        </ul>
        <p class="text-sm border-l-4 border-[var(--brand-orange)] pl-4 italic">Time Complexity: Push O(1), Pop/Peek Amortized O(1). Space Complexity: O(n).</p>
    </div>
  `,
};