/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    let res = 0;
    for(let i = 0; i < haystack.length; i++) {
        let j = 0, x = i;
        while(haystack[x] === needle[j] && x < haystack.length && j < needle.length) {
            x++; j++;
        }
        if (j === needle.length) { res = x - needle.length; return res; }
    }
    return -1;
};
// @lc code=end

