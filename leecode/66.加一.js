/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = [];
    let rest = 0;
    for(let i = digits.length - 1; i >= 0; i --) {
        let sum = 0;
        if (i === digits.length - 1) {
            sum = digits[i] + 1;
        } else {
            sum = rest + digits[i];
        }
        res[i] = sum % 10;
        rest = Math.floor(sum / 10);
    }
    if (rest > 0) {
        res.unshift(rest);
    }
    return res;
};
// @lc code=end

