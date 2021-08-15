/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let x = new ListNode();
    x.next = head;

    let arr = [];

    while(x.next) {
        x = x.next;
        const y = new ListNode();
        y.next = x;
        arr.push(y);
    }
    let loc = arr.length - n;
    if (arr.length === 1) return head.next;

    if (loc === 0) {
        return arr[1].next;
    } else if (n === 1) {
        arr[arr.length - 2].next.next= null;
        return arr[0].next;
    } else {
        arr[loc - 1].next.next = arr[loc].next.next;
        return arr[0].next;
    }
};
// @lc code=end

