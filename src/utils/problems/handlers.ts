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
      assert.strictEqual(fn([1,8,6,2,5,4,8,3,7]), 49);
      assert.strictEqual(fn([1,1]), 1);
      assert.strictEqual(fn([4,3,2,1,4]), 16);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 7. MERGE INTERVALS ===================== */
  "merge-intervals": (fn) => {
    try {
      assert.deepStrictEqual(
        fn([[1,3],[2,6],[8,10],[15,18]]),
        [[1,6],[8,10],[15,18]]
      );

      assert.deepStrictEqual(
        fn([[1,4],[4,5]]),
        [[1,5]]
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
      assert.strictEqual(fn([7,1,5,3,6,4]), 5);
      assert.strictEqual(fn([7,6,4,3,1]), 0);
      assert.strictEqual(fn([1,2]), 1);
      return true;
    } catch {
      return false;
    }
  },

  /* ===================== 10. SUBSETS ===================== */
  "subsets": (fn) => {
    try {
      const res1 = fn([1,2,3]);
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
};
