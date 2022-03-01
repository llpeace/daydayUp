/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const a = 97;
    const v1 = [];
    const v2 = [];
    const v3 = [];
    for (let i = 0; i < 26; i++) {
        v1[i] = 0;
    }
    for (let i = 0; i < s1.length; i++) {
        const x = s1.charCodeAt(i) - a;
        if (v1[x]) {
            v1[x] = v1[x] + 1;
        } else {
            v1[x] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        v2[i] = [];
        v3[i] = [];
        for (let j = 0; j < 26; j++) {
            if (s2.charCodeAt(i) - a === j) {
                v2[i][j] = i === 0 ? 1 : (v2[i - 1][j] + 1);
            } else {
                v2[i][j] = i === 0 ? 0 : v2[i - 1][j];
            }
            v3[i][j] = 0;
        }
    }

    for (let i = 0; i < s2.length; i++ ){
        for (let j = 0; j < 26; j++) {
            if (i >= s1.length) {
                const prev = i - s1.length;
                v3[i][j] = v2[i][j] - v2[prev][j];
            } else {
                v3[i][j] = v2[i][j];
            }
        }
    }
    const s3 = v1.join(',');

    for (let i = s1.length - 1; i < s2.length; i++) {
        const res = v3[i].join(',');
        if (s3 === res) return true;
    }
    return false;
};
// @lc code=end

