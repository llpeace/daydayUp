/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let ans = '', last = 0;
    while (len1 >= 0 || len2 >= 0) {
        const n1 = len1 >= 0 ? Number(num1[len1]) : 0;
        const n2 = len2 >= 0 ? Number(num2[len2]) : 0;
        const sum = n1 + n2 + last;
        last = Math.floor(sum / 10);
        ans = (sum % 10) + ans;
        len1--;
        len2--;
    }
    if (last > 0) {
        ans = last + ans;
    }
    return ans;
};
// @lc code=end

