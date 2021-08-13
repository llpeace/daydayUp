/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p && s) return false;
    if (!s && p) return false;
    if (!s && !p) return true;

    const reg = new RegExp(p, 'g');
    let match = s.match(reg);
    if (match) {
        match = match[0];
    }
    return match === s;
};
// @lc code=end

