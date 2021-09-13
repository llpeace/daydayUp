/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    const res = [];
    const find = (str, len) => {
        if (len === digits.length) {
            res.push(str);
            return;
        }
        for(let i = 0; i < map[digits[len]].length; i ++) {
            find(str + map[digits[len]][i], len + 1);
        }
    }
    find('', 0);
    if (digits.length === 0) return [];
    return res;
};
// @lc code=end
