/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let s1 = s.replace(/^[' ']*/g, '');
    let s2 = s1;
    let res = '';
    if (s1[0] === '-' || s1[0] === '+') {
        s2 = s1.slice(1);
    }
    s2 = s2.match(/^[0-9]*/g)[0];
    if (s2.length === 0) {
        res = 0;
    } else {
        res = (s1[0] === '-' || s1[0] === '+') ? s1[0] + s2 : s2;
    }

    const maxx = Math.pow(2, 31);

    if (Number(res) <= -maxx) {
        return -maxx;
    } else if (Number(res) >= maxx - 1) {
        return maxx - 1;
    } else {
        return Number(res);
    }
};
// @lc code=end

