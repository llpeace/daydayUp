/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const res = [];
    const dfs = (str, map) => {
        if (str.length === n) {
            res.push(str);
            return;
        }
        if (res.length >= k) return;
        for (let i = 1; i <= n; i++) {
            if (!map[i]) {
                dfs(str + i, { ...map, [i]: true });
            }
        }
        return;
    }
    dfs('', {});
    return res[k - 1];
};
// @lc code=end

