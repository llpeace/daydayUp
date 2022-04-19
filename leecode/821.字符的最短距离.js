/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let x = -1;
    const left = s.split('').map((item, index) => {
        if (item === c) {
            x = index;
        }
        return x;
    });
    x = -1;
    const res = [];
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            x = i;
        }
        if (left[i] === -1) {
            res[i] = x - i;
            continue;
        }
        if (x === -1) {
            res[i] = i - left[i];
            continue;
        }
        res[i] = Math.min(i - left[i], x - i);
    }

    return res;
};
// @lc code=end

