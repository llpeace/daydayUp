/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let news = s;
    let len = news.length;
    let result = '', maxlen = '';
    s = s.split(/\B/);
    const judge1 = function (maxlen, l, r) {
        while(l >=0 && r < len && s[l] === s[r]) {
            maxlen = s[l] + maxlen + s[r];
            l --;
            r ++;
        }
        return maxlen;
    }
    const getResult = function (srt1, srt2) {
        return srt1.length > srt2.length ? srt1 : srt2;
    } 
    for (let i = 1; i < len; i++) {
        if (s[i] === s[i - 1]) {
            result = getResult(result, judge1('', i - 1, i));
        }
        if (i < len - 1 && s[i - 1] === s[i + 1]) {
            result = getResult(result, judge1(s[i], i - 1, i + 1));
        }
    }
    if (result.length === 0 && s.length > 0) {
        result = s[0];
    }
    return result;
};
// @lc code=end

