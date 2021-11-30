/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let dp = [], result = 0;
    for(let i = 0; i < matrix.length; i++) {
        if (!dp[i]) dp[i] = [];
        for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i > 0 && j > 0) {
                    min = Math.min(dp[i-1][j], dp[i][j-1]);
                    dp[i][j] = Math.min(min, dp[i-1][j-1]) + 1;
                } else if(i === 0 && j === 0) {
                    dp[i][j] = Number(matrix[i][j]);
                } else if (i === 0 || j == 0) {
                    dp[i][j] = Number(matrix[i][j]);
                }
            }
            result = Math.max(dp[i][j] * dp[i][j], result);
        }
    }
    return result;
};
// @lc code=end

