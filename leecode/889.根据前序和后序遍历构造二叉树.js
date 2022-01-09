/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let map = [];

    postorder.forEach((item, index) => { map[item] = index; });
    
    const find = (pre, location) => {
        if (!pre.length) return null;
        const n = new TreeNode(pre[0]);
        if (pre.length === 1) return n;

        let preArr = pre.slice(1);
        let leftTreeRoot = preArr[0];
        let leftLength = map[leftTreeRoot] + 1 - location;

        let leftTree = preArr.slice(0, leftLength);
        let rightTree = preArr.slice(leftLength);
        let left = find(leftTree, location);
        let right = find(rightTree, location + leftLength);
        n.left = left;
        n.right = right;

        return n;
    }

    const n = find(preorder, 0);

    return n;
};
// @lc code=end

