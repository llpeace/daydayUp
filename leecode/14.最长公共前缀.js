/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    for(let i = 0; i < 200; i++) {
        let now = '';
        for(let j = 0; j < strs.length; j++) {
            if (strs[j].length <= i) return res;
            if (j === 0) {
                now = strs[j][i];
            }
            else if (strs[j][i] !== now) {
                return res;
            }
        }
        res = res + now;
    }

    return res;
};
// @lc code=end

