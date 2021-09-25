/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let news = s.replace(/\s/g, '').match(/[0-9a-zA-Z]/gi);
    if (!news) return true;
    let s2 = news.join('').toLocaleLowerCase();
    let news1 = news.reverse().join('').toLocaleLowerCase();
    return news1 === s2;
};
// @lc code=end

