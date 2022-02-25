/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const arr = [];
    const find = (root, depth) => {
        if (!root) return;
        find(root.left, depth + 1);
        if(!arr[depth]) {
            arr[depth] = [root.val];
        } else {
            if (depth % 2 === 0) {
                arr[depth].push(root.val);
            } else {
                arr[depth].unshift(root.val);
            }
        }
        find(root.right, depth + 1);
    }
    find(root, 0);
    return arr;
};
// @lc code=end

