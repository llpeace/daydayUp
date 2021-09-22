/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let x = headA, len1 = 1;
    let y = headB, len2 = 1;
    while (x.next || y.next) {
        if (x.next) {
            x = x.next;
            len1++;
        }
        if (y.next) {
            y = y.next;
            len2++;
        }
    }
    if (x !== y) return null;
    x = headA;
    y = headB;
    // console.log(len1, len2);
    if (len1 === len2) {
        while(x && y) {
            if (x === y) return x;
            x = x.next;
            y = y.next;
        }
    } else if (len1 < len2) {
        let d = len2 - len1;
        while(d--){
            y = y.next;
        }
        while(x && y) {
            if (x === y) {
                return x;
            }
            x = x.next;
            y = y.next;
        }
    } else if (len2 < len1) {
        let d = len1 - len2;
        while(d--){
            x = x.next;
        }
        while(x && y) {
            if (x === y) return x;
            x = x.next;
            y = y.next;
        }
    }
    return null
};
// @lc code=end

