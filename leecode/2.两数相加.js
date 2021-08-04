/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let first = new ListNode();
  let now = null;
  let last = first;

  let rest = 0;
  while(l1 || l2) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    const sum = num1 + num2 + rest;
    rest = Math.floor(sum / 10);

    now = new ListNode();
    now.val = sum % 10;
    now.next = null;

    last.next = now;
    last = now;

    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
  }
  if (rest !== 0) {
    last.next = new ListNode(rest, null);
  }
  return first.next;
};
// @lc code=end

