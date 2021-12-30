/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
    let res = [];
    const m = new Map();
    const func = (node, deep) => {
        if (!node) return;
        if (m.get(deep)) {
            res[deep] = Math.max(node.val, res[deep]);
        } else {
            res[deep] = node.val;
            m.set(deep, 1);
        }
        func(node.left, deep + 1);
        func(node.right, deep + 1);
    }
    func(root, 0);
    return res;
};
// @lc code=end

