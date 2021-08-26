/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let res = 1;
    for (let i = 1; i <= Math.floor(x / 2); i++) {
        if (i * i <= x) {
            res = i;
        } else {
            break;
        }
    }
    if (x === 0) return 0;
    return res;
};
// @lc code=end

