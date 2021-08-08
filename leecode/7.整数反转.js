/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = String(x);
    if (y.charAt(0) === '-') {
        y = y.slice(1);
    }
    y = y.split('').reverse().join('').replace(/^0*/g, '');
    
    if (String(x).charAt(0) === '-') y = '-' + y;
    let max = Math.pow(2, 31);
    if (Number(y) > max - 1 || Number(y) < -max || Number(y) === 0) return 0;
    return y;
};
// @lc code=end

