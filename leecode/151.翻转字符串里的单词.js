/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let word = '';
    // const res = [];
    // for(let i = 0; i < s.length; i++) {
    //     if (s[i] === ' ') {
    //         if (word) {
    //             res.unshift(word);
    //         }
    //         word = '';
    //         continue;
    //     } else {
    //         word = word + s[i];
    //     }
    // }
    // if (word) {
    //     res.unshift(word);
    // }
    // return res.join(' ');
    const res = Array.from(s.matchAll(/(\S+)/g), m => m[0]);
    return res.reverse().join(' ');
};
// @lc code=end

