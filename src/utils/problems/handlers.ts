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

  /* ===================== 2. JUMP GAME ===================== */
  "jump-game": (fn) => {
    try {
      assert.strictEqual(fn([2, 3, 1, 1, 4]), true);
      assert.strictEqual(fn([3, 2, 1, 0, 4]), false);
      return true;
    } catch {
      return false;
    }
  },

  /* ================= 3. REVERSE LINKED LIST ================= */
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

  /* ================= 4. SEARCH A 2D MATRIX ================= */
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

  /* ================= 5. VALID PARENTHESES ================= */
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
};
