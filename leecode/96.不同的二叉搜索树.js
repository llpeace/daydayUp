/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let arr = [1,1,2,5];
    const find = (n) => {
        if (arr[n]) {
            return arr[n];
        }
        let res = 0;
        for(let i = 1; i <= n; i++) {
            const a = find(i - 1);
            const b = find(n - i);
            res += (a * b);
        }
        arr[n] = res;
        return res;
    }

    find(n);
    return arr[n];
};
// @lc code=end

