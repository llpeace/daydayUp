/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const judge = (root, height) => {
        if (!root) {
            return height;
        }
        const left = judge(root.left, height + 1);
        const right = judge(root.right, height + 1);
        return Math.max(left, right);
    }

    const find = (root) => {
        if (!root) return true;

        const left = judge(root.left, 0);
        const right = judge(root.right, 0);
        if (Math.abs(left - right) > 1) {
            return false;
        }
        return find(root.left) && find(root.right);
    }
    return find(root);
};
// @lc code=end

