/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const y = String(x);
    const reverseY = y.split('').reverse().join('');
    return y === reverseY;
};
// @lc code=end

