/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const res = [0,1,2,3];
    for(let i = 4; i <= 70; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n];
};
// @lc code=end

