/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const m = new Map();
    const n = new Map();
    const res = [];
    const func = (node) => {
        if (!node) return '#';
        let left = func(node.left);
        let right = func(node.right);
        let s = left+ ',' + right + ',' + node.val + ',';
        if (!m.get(s)) {
            m.set(s, 1);
        } else if (!n.get(s) && m.get(s)){
            n.set(s, 1);
            res.push(node);
        }
        
        return s;
    }
    func(root);
    return [...res];
};
// @lc code=end

