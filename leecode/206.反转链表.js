/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // a a.next a.next.next b
    // last now next

    let first = head;
    let now = null;
    while(first) {
        const next = first.next;
        first.next = now;
        now = first;
        first = next;
    }
    return now;
};
// @lc code=end

