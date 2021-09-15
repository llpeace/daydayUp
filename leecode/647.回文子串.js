/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = [];
    const judge = str => {
        if (str === str.split('').reverse().join('')) return true;
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            const str = s.slice(i, j);
            if (judge(str)) {
                res.push(str);
            }
        }
    }
    return res.length;
};
// @lc code=end

