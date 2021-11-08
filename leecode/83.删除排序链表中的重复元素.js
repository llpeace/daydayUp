/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let node = new ListNode();
    let last = head;
    if (!head) return head;
    node.next = head;
    let val = head.val;
    head = head.next;
    while(head) {
        if (head.val === val) {
            last.next = head.next;
        } else {
            last = head;
        }
        val = head.val;
        head = head.next;
    }
    return node.next;
};
// @lc code=end

