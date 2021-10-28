/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let head = new TreeNode(-100000);
    const build = (arr, head) => {
        const len = arr.length;
        if (len === 0) return;
        let x = Math.floor(len / 2);
        let point = new TreeNode(arr[x]);
        if (arr[x] < head.val) {
            head.left = point;
        } else {
            head.right = point;
        }
        if (x >= 0) {
            build(arr.slice(0, x), point);
        }
        if (x < arr.length) {
            build(arr.slice(x + 1, arr.length), point);
        }
        return;
    }
    build(nums, head);

    return head.right;
};
// @lc code=end

