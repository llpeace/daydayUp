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
    let res = [];
    let x = new ListNode();
    const node = x;
    while(head) {
        res.push(head.val);
        head = head.next;
    }
    // function sort(arr) {
    //     if (!arr.length) return [];
    //     const x = arr[0];
    //     const left = [], right = [];
    //     for(let i = 1; i < arr.length; i++) {
    //         if (arr[i] < x) {
    //             left.push(arr[i]);
    //         } else {
    //             right.push(arr[i])
    //         }
    //     }
    //     return [...sort(left), x, ...sort(right)];
    // }
    res = res.sort((a, b) => (a - b));
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        const n = new ListNode(res[i]);
        x.next = n;
        x = n;
    }
    return node.next;
};
// @lc code=end

