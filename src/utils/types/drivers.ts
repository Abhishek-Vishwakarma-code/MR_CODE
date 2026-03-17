export const problemDrivers: Record<string, Record<string, string>> = {
    /* ===================== Batch 1: Arrays & Basic Logic ===================== */
    "two-sum": {
        python: `\nif __name__ == "__main__":\n    import json\n    print(json.dumps(Solution().twoSum([2,7,11,15], 9)).replace(" ", ""))`,
        cpp: `\nint main() { Solution s; vector<int> n={2,7,11,15}; vector<int> r=s.twoSum(n,9); cout << "[" << r[0] << "," << r[1] << "]" << endl; return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { int[] r = new Solution().twoSum(new int[]{2,7,11,15}, 9); System.out.println("["+r[0]+","+r[1]+"]"); } }`,
        c: `\nint main() { int n[]={2,7,11,15}; int rs; int* r=twoSum(n,4,9,&rs); printf("[%d,%d]\\n", r[0], r[1]); return 0; }`
    },
    "best-time-to-buy-and-sell-stock": {
        python: `\nif __name__ == "__main__":\n    print(Solution().maxProfit([7,1,5,3,6,4]))`,
        cpp: `\nint main() { Solution s; vector<int> p={7,1,5,3,6,4}; cout << s.maxProfit(p); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().maxProfit(new int[]{7,1,5,3,6,4})); } }`,
        c: `\nint main() { int p[]={7,1,5,3,6,4}; printf("%d\\n", maxProfit(p, 6)); return 0; }`
    },
    "product-of-array-except-self": {
        python: `\nif __name__ == "__main__":\n    import json\n    print(json.dumps(Solution().productExceptSelf([1,2,3,4])).replace(" ", ""))`,
        cpp: `\nint main() { Solution s; vector<int> n={1,2,3,4}; vector<int> r=s.productExceptSelf(n); cout << "[" << r[0] << "," << r[1] << "," << r[2] << "," << r[3] << "]"; return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(java.util.Arrays.toString(new Solution().productExceptSelf(new int[]{1,2,3,4})).replace(" ", "")); } }`
    },
    "climbing-stairs": {
        python: `\nprint(Solution().climbStairs(2))`,
        cpp: `\nint main() { cout << Solution().climbStairs(2); }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().climbStairs(2)); } }`
    },

    /* ===================== Batch 2: Strings & Two Pointers ===================== */
    "valid-parentheses": {
        python: `\nif __name__ == "__main__":\n    print(str(Solution().isValid("()[]{}")).lower())`,
        cpp: `\nint main() { cout << (Solution().isValid("()[]{}") ? "true" : "false"); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().isValid("()[]{}")); } }`
    },
    "valid-anagram": {
        python: `\nprint(str(Solution().isAnagram("anagram", "nagaram")).lower())`,
        cpp: `\nint main() { cout << (Solution().isAnagram("anagram", "nagaram") ? "true" : "false"); }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().isAnagram("anagram", "nagaram")); } }`
    },
    "container-with-most-water": {
        python: `\nif __name__ == "__main__":\n    print(Solution().maxArea([1,8,6,2,5,4,8,3,7]))`,
        cpp: `\nint main() { vector<int> h={1,8,6,2,5,4,8,3,7}; cout << Solution().maxArea(h); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().maxArea(new int[]{1,8,6,2,5,4,8,3,7})); } }`
    },
    "find-index-first-occurrence": {
        python: `\nprint(Solution().strStr("sadbutsad", "sad"))`,
        cpp: `\nint main() { cout << Solution().strStr("sadbutsad", "sad"); }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().strStr("sadbutsad", "sad")); } }`
    },

    /* ===================== Batch 3: Linked Lists & Trees ===================== */
    "reverse-linked-list": {
        python: `\nif __name__ == "__main__":\n    h = ListNode(1, ListNode(2, ListNode(3)))\n    print(Solution().reverseList(h).val)`,
        cpp: `\nint main() { ListNode* h = new ListNode(1); cout << Solution().reverseList(h)->val; return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { ListNode h = new ListNode(1); System.out.println(new Solution().reverseList(h).val); } }`
    },
    "maximum-depth-of-binary-tree": {
        python: `\nif __name__ == "__main__":\n    r = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\n    print(Solution().maxDepth(r))`,
        cpp: `\nint main() { TreeNode* r = new TreeNode(3); cout << Solution().maxDepth(r); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { TreeNode r = new TreeNode(3); System.out.println(new Solution().maxDepth(r)); } }`
    },
    "merge-two-sorted-lists": {
        python: `\nif __name__ == "__main__":\n    l1 = ListNode(1, ListNode(2, ListNode(4)))\n    l2 = ListNode(1, ListNode(3, ListNode(4)))\n    print(Solution().mergeTwoLists(l1, l2).val)`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().mergeTwoLists(null, null) == null ? "null" : "ok"); } }`
    },

    /* ===================== Batch 4: Sorting & Binary Search ===================== */
    "search-a-2d-matrix": {
        python: `\nif __name__ == "__main__":\n    print(str(Solution().searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).lower())`,
        cpp: `\nint main() { vector<vector<int>> m={{1,3,5,7},{10,11,16,20},{23,30,34,60}}; cout << (Solution().searchMatrix(m, 3) ? "true" : "false"); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { int[][] m = {{1,3,5,7},{10,11,16,20}}; System.out.println(new Solution().searchMatrix(m, 3)); } }`
    },
    "sort-colors": {
        python: `\nn = [2,0,2,1,1,0]\nSolution().sortColors(n)\nprint(str(n).replace(" ", ""))`,
        cpp: `\nint main() { vector<int> n={2,0,2,1,1,0}; Solution().sortColors(n); cout << "[" << n[0] << "," << n[1] << "," << n[2] << "," << n[3] << "," << n[4] << "," << n[5] << "]"; }`
    },
    "top-k-frequent-elements": {
        python: `\nif __name__ == "__main__":\n    import json\n    res = Solution().topKFrequent([1,1,1,2,2,3], 2)\n    print(json.dumps(sorted(res)).replace(" ", ""))`,
        cpp: `\nint main() { vector<int> n={1,1,1,2,2,3}; vector<int> r=Solution().topKFrequent(n, 2); sort(r.begin(), r.end()); cout << "[" << r[0] << "," << r[1] << "]"; return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { int[] r = new Solution().topKFrequent(new int[]{1,1,1,2,2,3}, 2); java.util.Arrays.sort(r); System.out.println(java.util.Arrays.toString(r).replace(" ", "")); } }`
    },

    /* ===================== Batch 5: Design & Hash Tables ===================== */
    "min-stack": {
        python: `\nm = MinStack(); m.push(-2); m.push(0); m.push(-3); print(m.getMin())`,
        cpp: `\nint main() { MinStack m; m.push(-2); m.push(0); m.push(-3); cout << m.getMin(); }`,
        java: `\npublic class Main { public static void main(String[] args) { MinStack m = new MinStack(); m.push(-2); System.out.println(m.getMin()); } }`
    },
    "implement-queue-using-stacks": {
        python: `\nq = MyQueue(); q.push(1); q.push(2); print(f"[null,null,null,{q.peek()},{q.pop()},{str(q.empty()).lower()}]")`,
        cpp: `\nint main() { MyQueue q; q.push(1); q.push(2); cout << "[null,null,null," << q.peek() << "," << q.pop() << "," << (q.empty()?"true":"false") << "]"; }`,
        java: `\npublic class Main { public static void main(String[] args) { MyQueue q = new MyQueue(); q.push(1); q.push(2); System.out.println("[null,null,null,"+q.peek()+","+q.pop()+","+q.empty()+"]"); } }`
    },
    "intersection-of-two-arrays": {
        python: `\nimport json\nprint(json.dumps(sorted(Solution().intersection([1,2,2,1], [2,2]))).replace(" ", ""))`,
        cpp: `\nint main() { vector<int> n1={1,2,2,1}, n2={2,2}; vector<int> r=Solution().intersection(n1, n2); cout << "[" << r[0] << "]"; }`
    },
    "longest-consecutive-sequence": {
        python: `\nprint(Solution().longestConsecutive([100,4,200,1,3,2]))`,
        cpp: `\nint main() { vector<int> n={100,4,200,1,3,2}; cout << Solution().longestConsecutive(n); }`,
        java: `\npublic class Main { public static void main(String[] args) { int[] n = {100,4}; System.out.println(new Solution().longestConsecutive(n)); } }`
    },
    "jump-game": {
        python: `\nif __name__ == "__main__":\n    print(str(Solution().canJump([2,3,1,1,4])).lower())`,
        cpp: `\nint main() { vector<int> n={2,3,1,1,4}; cout << (Solution().canJump(n)?"true":"false"); return 0; }`,
        java: `\npublic class Main { public static void main(String[] args) { System.out.println(new Solution().canJump(new int[]{2,3,1,1,4})); } }`
    },
    "merge-intervals": {
        python: `\nimport json\nprint(json.dumps(Solution().merge([[1,3],[2,6],[8,10],[15,18]])).replace(" ", ""))`,
        java: `\npublic class Main { public static void main(String[] args) { int[][] r = new Solution().merge(new int[][]{{1,3},{2,6}}); System.out.println(Arrays.deepToString(r).replace(" ", "")); } }`
    },
    "subsets": {
        python: `\nprint(len(Solution().subsets([1,2,3])))`,
        cpp: `\nint main() { vector<int> n={1,2,3}; cout << Solution().subsets(n).size(); }`
    },
    "remove-element": {
        python: `\nprint(Solution().removeElement([3,2,2,3], 3))`,
        cpp: `\nint main() { vector<int> n={3,2,2,3}; cout << Solution().removeElement(n, 3); }`
    }
};