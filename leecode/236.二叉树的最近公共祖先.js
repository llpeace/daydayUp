/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if ((p.right && p.right.val == q.val) || (p.left && p.left.val == q.val)) return p;
    if ((q.right && q.right.val == p.val) || (q.left && q.left.val == p.val)) return q;
    const find = (node, arr = [], v) => {
        if (!node) {
            return [];
        }
        if (node.val === v) {
            return arr;
        }
        const newArr = [node.val, ...arr];
        const leftArr = find(node.left, newArr, v);
        const rightArr = find(node.right, newArr, v);
        return [ ...leftArr, ...rightArr ];
    }

    const arrP = find(root, [], p.val);
    const arrQ = find(root, [], q.val);

    if (arrP.includes(q.val)) return q;
    if (arrQ.includes(p.val)) return p;

    let ans = 0;

    for (let i = 0; i < arrP.length; i++) {
        if (arrQ.indexOf(arrP[i]) !== -1) {
            ans = arrP[i];
            break;
        }
    }
    for (let i = 0; i < arrQ.length; i++) {
        if (arrP.indexOf(arrQ[i]) !== -1) {
            ans = arrQ[i];
            break;
        }
    }
    const findNode = (a) => {
        if (!a) {
            return null;
        }
        if (a.val === ans) {
            return a;
        }
        const left = findNode(a.left);
        const right = findNode(a.right);
        return left || right;
    }
    return findNode(root);
};
// @lc code=end

