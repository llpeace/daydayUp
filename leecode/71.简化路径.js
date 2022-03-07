/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || arr[i] === '.') {
            continue;
        }
        if (arr[i] === '..') {
            if (res.length === 0) {
                continue;
            }
            else {
                res.pop();
            }
        } else {
            res.push(arr[i]);
        }
    }
    if (!res.length) return '/';
    return '/' + res.join('/');
};
// @lc code=end

