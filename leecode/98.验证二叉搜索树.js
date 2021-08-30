/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    const newFind = (node, val, left) => {
        if (!node) return true;
        if (left && node.val >= val) {
            return false;
        }
        if (!left && node.val <= val) {
            return false;
        }
        return newFind(node.left, val, left) && newFind(node.right, val, left)
    }
    const find = (node, val, left) => {
        if (!node) return true;
        if (!newFind(node, val, left) || !newFind(node, val, left)) return false;
        return find(node.left, node.val, true) && find(node.right, node.val, false);
    }

    let l = true, r = true;
    if (root.left) l = find(root.left, root.val, true);
    if (root.right) r = find(root.right, root.val, false);
    return l && r;
};
// @lc code=end

