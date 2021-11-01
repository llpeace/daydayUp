/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    const num = [];
    const find = (root, deep) => {
        if (!root) return;
        if (num[deep]) {
            num[deep].push(root.val);
        } else {
            num[deep] = [root.val];
        }
        find(root.left, deep + 1);
        find(root.right, deep + 1);
    }
    find(root, 0);
    return num;
};
// @lc code=end

