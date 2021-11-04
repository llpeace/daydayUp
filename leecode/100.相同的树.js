/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    const judge = (node1, node2) => {
        if (!node1 && !node2) return true;
        if ((!node1 && node2) || (node1 && !node2) || node1.val !== node2.val) {
            return false;
        }
        return judge(node1.left, node2.left) && judge(node1.right, node2.right);
    }
    return judge(p, q);

};
// @lc code=end

