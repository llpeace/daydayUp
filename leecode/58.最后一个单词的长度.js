/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // \s匹配空白字符
    // g修饰符表示全局匹配，查找所有的匹配项
    let x = s.replace(/^\s+|\s+$/g, '').split(/\s+/);
    if (x.length === 0) return 0;
    return x[x.length - 1].length;
};
// @lc code=end

