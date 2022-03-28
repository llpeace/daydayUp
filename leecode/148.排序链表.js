/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    const merge = (left, right) => {
        let l = left, r = right;
        let res = new ListNode();
        let head = res;
        while (l || r) {
            if ((r && l && l.val < r.val) || (!r && l)) {
                res.next = l;
                l = l.next;
            } else if ((l && r && l.val >= r.val) || (!l && r)) {
                res.next = r;
                r = r.next;
            }
            res = res.next;
        }
        return head.next;
    }

    const sort = (list, tail) => {
        let fast = list, slow = list;
        if (list === null) {
            return list;
        }
        if (list.next === tail) {
            list.next = null;
            return list;
        }
        while (fast !== tail) {
            slow = slow.next;
            fast = fast.next;
            if (fast !== tail) {
                fast = fast.next;
            }
        }
        const mid = slow;
        return merge(sort(list, mid), sort(mid, tail));
    }
    return sort(head, null);
};
// @lc code=end

