/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const str = String(n);
    const digit = str.length;
    const res = [];
    const map = new Map();
    
    const find = (prefix) => {
        if (prefix.length > digit) return;
        if (Number(prefix) > n) return;
        if (map.get(prefix)) return;
        if (prefix) {
            map.set(prefix, 1);
            res.push(prefix);
        }
        for (let i = 0; i <= 9; i ++) {
            if (prefix.length === 0 && i === 0) {
                continue;
            }
            find(prefix + i);
        }
    }
    find('');
    return res;
};
// @lc code=end

