/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    const find =  function(node, deep) {
        if (!node.left && !node.right) return deep;
        let deepLeft = 0;
        let deepRight = 0;
        if (node.left) deepLeft = find(node.left, deep + 1);
        if (node.right) deepRight = find(node.right, deep + 1);
        return Math.max(deepLeft, deepRight);
    }
    if (!root) return 0;
    return find(root, 1);
};
// @lc code=end

