/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;
    const res = [];
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        for (let j = i; j >= 0; j--) {
            if (i === 0) {
                res[j] = triangle[i][j];
            } else {
                if (j === 0) {
                    res[j] = res[j] + triangle[i][j];
                } else {
                    if (res[j] === undefined) res[j] = Number.MAX_SAFE_INTEGER;
                    res[j] = Math.min(res[j], res[j - 1]) + triangle[i][j];
                }
            }
            if (i === len - 1) {
                ans = Math.min(ans, res[j]);
            }
        }
    }
    return ans;
};
// @lc code=end

