/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    const find = (left, right, str) => {
        if(left === n && right === n) {
            res.push(str);
            return;
        }
        if (left < n && right < n) {
            find(left + 1, right, str + '(');
        }
        if (left > right) {
            find(left, right + 1, str + ')');
        }
    }

    find(0, 0, '');

    return res;
};
// @lc code=end

