"use client";

import assert from "assert";

/**
 * Each handler receives the user's submitted function
 * and returns true if ALL test cases pass
 */
export const problemHandlers: Record<string, (fn: any) => boolean> = {

  /* ===================== 1. TWO SUM ===================== */
  "two-sum": (fn) => {
    try {
      const nums = [
        [2, 7, 11, 15],
        [3, 2, 4],
        [3, 3],
      ];
      const targets = [9, 6, 6];
      const answers = [
        [0, 1],
        [1, 2],
        [0, 1],
      ];

      for (let i = 0; i < nums.length; i++) {
        const result = fn(nums[i], targets[i]);
        assert.deepStrictEqual(result, answers[i]);
      }
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 2. REVERSE LINKED LIST ===================== */
  "reverse-linked-list": (fn) => {
    try {
      const list = {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      };

      const res = fn(list);

      assert.strictEqual(res.val, 3);
      assert.strictEqual(res.next.val, 2);
      assert.strictEqual(res.next.next.val, 1);
      assert.strictEqual(res.next.next.next, null);

      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 3. JUMP GAME ===================== */
  "jump-game": (fn) => {
    try {
      assert.strictEqual(fn([2, 3, 1, 1, 4]), true);
      assert.strictEqual(fn([3, 2, 1, 0, 4]), false);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 4. VALID PARENTHESES ===================== */
  "valid-parentheses": (fn) => {
    try {
      assert.strictEqual(fn("()[]{}"), true);
      assert.strictEqual(fn("(]"), false);
      assert.strictEqual(fn("([)]"), false);
      assert.strictEqual(fn("{[]}"), true);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 5. SEARCH A 2D MATRIX ===================== */
  "search-a-2d-matrix": (fn) => {
    try {
      const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ];

      assert.strictEqual(fn(matrix, 3), true);
      assert.strictEqual(fn(matrix, 13), false);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 6. CONTAINER WITH MOST WATER ===================== */
  "container-with-most-water": (fn) => {
    try {
      assert.strictEqual(fn([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
      assert.strictEqual(fn([1, 1]), 1);
      assert.strictEqual(fn([4, 3, 2, 1, 4]), 16);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 7. MERGE INTERVALS ===================== */
  "merge-intervals": (fn) => {
    try {
      assert.deepStrictEqual(
        fn([[1, 3], [2, 6], [8, 10], [15, 18]]),
        [[1, 6], [8, 10], [15, 18]]
      );

      assert.deepStrictEqual(
        fn([[1, 4], [4, 5]]),
        [[1, 5]]
      );

      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 8. MAXIMUM DEPTH OF BINARY TREE ===================== */
  "maximum-depth-of-binary-tree": (fn) => {
    try {
      const tree1 = {
        val: 3,
        left: { val: 9, left: null, right: null },
        right: {
          val: 20,
          left: { val: 15, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
      };

      const tree2 = {
        val: 1,
        left: null,
        right: { val: 2, left: null, right: null },
      };

      assert.strictEqual(fn(tree1), 3);
      assert.strictEqual(fn(tree2), 2);
      assert.strictEqual(fn(null), 0);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 9. BEST TIME TO BUY AND SELL STOCK ===================== */
  "best-time-to-buy-and-sell-stock": (fn) => {
    try {
      assert.strictEqual(fn([7, 1, 5, 3, 6, 4]), 5);
      assert.strictEqual(fn([7, 6, 4, 3, 1]), 0);
      assert.strictEqual(fn([1, 2]), 1);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 10. SUBSETS ===================== */
  "subsets": (fn) => {
    try {
      const res1 = fn([1, 2, 3]);
      const res2 = fn([0]);

      assert.strictEqual(res1.length, 8); // 2^3
      assert.strictEqual(res2.length, 2); // 2^1

      // ensure empty subset exists
      assert.ok(res1.some((s: any[]) => s.length === 0));

      return true;
    } catch {
      return false;
    }
  },
  /* ===================== 11. VALID ANAGRAM ===================== */
  "valid-anagram": (fn) => {
    try {
      assert.strictEqual(fn("anagram", "nagaram"), true);
      assert.strictEqual(fn("rat", "car"), false);
      assert.strictEqual(fn("a", "a"), true);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 12. CLIMBING STAIRS ===================== */
  "climbing-stairs": (fn) => {
    try {
      assert.strictEqual(fn(2), 2);
      assert.strictEqual(fn(3), 3);
      assert.strictEqual(fn(4), 5);
      assert.strictEqual(fn(10), 89);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 13. PRODUCT OF ARRAY EXCEPT SELF ===================== */
  "product-of-array-except-self": (fn) => {
    try {
      assert.deepStrictEqual(fn([1, 2, 3, 4]), [24, 12, 8, 6]);
      assert.deepStrictEqual(fn([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 14. MERGE TWO SORTED LISTS ===================== */
  "merge-two-sorted-lists": (fn) => {
    try {
      const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
      const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
      const res = fn(l1, l2);

      // verify 1 -> 1 -> 2 -> 3 -> 4 -> 4
      assert.strictEqual(res.val, 1);
      assert.strictEqual(res.next.val, 1);
      assert.strictEqual(res.next.next.val, 2);
      assert.strictEqual(res.next.next.next.val, 3);
      assert.strictEqual(res.next.next.next.next.val, 4);
      assert.strictEqual(res.next.next.next.next.next.val, 4);
      assert.strictEqual(res.next.next.next.next.next.next, null);

      // Empty lists
      assert.strictEqual(fn(null, null), null);
      return true;
    } catch {
      return false;
    }
  },
  /* ===================== 15. REMOVE ELEMENT ===================== */
  "remove-element": (fn) => {
    try {
      const nums1 = [3, 2, 2, 3];
      const val1 = 3;
      const res1 = fn(nums1, val1);
      assert.strictEqual(res1, 2);
      assert.deepStrictEqual(nums1.slice(0, 2).sort(), [2, 2]);

      const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
      const val2 = 2;
      const res2 = fn(nums2, val2);
      assert.strictEqual(res2, 5);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 16. FIND INDEX FIRST OCCURRENCE ===================== */
  "find-index-first-occurrence": (fn) => {
    try {
      assert.strictEqual(fn("sadbutsad", "sad"), 0);
      assert.strictEqual(fn("leetcode", "leeto"), -1);
      assert.strictEqual(fn("hello", "ll"), 2);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 17. SORT COLORS ===================== */
  "sort-colors": (fn) => {
    try {
      let nums1 = [2, 0, 2, 1, 1, 0];
      fn(nums1);
      assert.deepStrictEqual(nums1, [0, 0, 1, 1, 2, 2]);

      let nums2 = [2, 0, 1];
      fn(nums2);
      assert.deepStrictEqual(nums2, [0, 1, 2]);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 18. TOP K FREQUENT ELEMENTS ===================== */
  "top-k-frequent-elements": (fn) => {
    try {
      const res1 = fn([1, 1, 1, 2, 2, 3], 2);
      assert.deepStrictEqual(res1.sort(), [1, 2]);

      const res2 = fn([1], 1);
      assert.deepStrictEqual(res2, [1]);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 19. MIN STACK ===================== */
  "min-stack": (fn) => {
    try {
      const minStack = new fn();
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);
      assert.strictEqual(minStack.getMin(), -3);
      minStack.pop();
      assert.strictEqual(minStack.top(), 0);
      assert.strictEqual(minStack.getMin(), -2);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 20. IMPLEMENT QUEUE USING STACKS ===================== */
  "implement-queue-using-stacks": (fn) => {
    try {
      const queue = new fn();
      queue.push(1);
      queue.push(2);
      assert.strictEqual(queue.peek(), 1);
      assert.strictEqual(queue.pop(), 1);
      assert.strictEqual(queue.empty(), false);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 21. INTERSECTION OF TWO ARRAYS ===================== */
  "intersection-of-two-arrays": (fn) => {
    try {
      const res1 = fn([1, 2, 2, 1], [2, 2]);
      assert.deepStrictEqual(res1.sort(), [2]);

      const res2 = fn([4, 9, 5], [9, 4, 9, 8, 4]);
      assert.deepStrictEqual(res2.sort(), [4, 9]);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 22. LONGEST CONSECUTIVE SEQUENCE ===================== */
  "longest-consecutive-sequence": (fn) => {
    try {
      assert.strictEqual(fn([100, 4, 200, 1, 3, 2]), 4);
      assert.strictEqual(fn([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
      return true;
    } catch {
      return false;
    }
  },
};
