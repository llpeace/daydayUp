/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 0; i < numRows; i++) {
        let column = [];
        for(let j = 0; j <= i; j++) {
            if(j == 0 || i == 0 || j == i) {
                column.push(1);
            } else {
                column.push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
        res.push(column);
    }
    return res;
};
// @lc code=end

