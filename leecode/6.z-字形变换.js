/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const res = [];
    let x = s.length;
    let y = 0, i = 0, j = 0, flag = true;

    if (numRows === 1) return s;
    while(y < x) {
        if (i === 0) {
            flag = true;
        }
        if (i === numRows - 1) {
            flag = false;
        }
        if (j === 0) {
            res[i] = '';
        }
        res[i] = res[i] + s[y];

        if (flag) i ++;
        else {
            i --;
            j ++;
        }

        y ++;
    }
    return res.join('');
};
// @lc code=end

