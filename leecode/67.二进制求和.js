/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '', rest = 0;
    const len = Math.max(a.length, b.length);
    for(let i = 0; i < len; i++) {
        const numa = a.length - 1 - i >= 0 ? Number(a.charAt(a.length - 1 - i)) : 0;
        const numb = b.length - 1 - i >= 0 ? Number(b.charAt(b.length - 1 - i)) : 0;
        const sum = numa + numb + rest;
        res = (sum % 2) + res;
        rest = Math.floor(sum / 2);
    }
    if (rest !== 0 ) res = rest + res;
    return res;
};
// @lc code=end

