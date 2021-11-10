/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const ans = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
    let res = '';
    while(columnNumber) {
        const rest = columnNumber % 26;
        const v = Math.floor(columnNumber / 26)
        res = ans[rest] + res;
        columnNumber = rest === 0 ? v - 1 : v;
    }
    return res;
};
// @lc code=end

