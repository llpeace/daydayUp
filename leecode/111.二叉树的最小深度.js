/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {

    const find = (node, deep) => {
        if (!node.left && !node.right) {
            return deep;
        }
        let left = Number.MAX_SAFE_INTEGER;
        let right = Number.MAX_SAFE_INTEGER;
    
        if(node.left) left = find(node.left, deep + 1);
        if(node.right) right = find(node.right, deep + 1);
        return Math.min(left, right);
    }
    if (!root) return 0;
    return find(root, 1);
};
// [2,null,3,null,4,null,5,null,6]\n1
// @lc code=end

