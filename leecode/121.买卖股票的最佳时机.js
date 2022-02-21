/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, value = 0;
    for(let i = prices.length - 1; i >= 0; i-- ) {
        if (max < prices[i]) {
            max = prices[i];
        } else {
            value = Math.max(max - prices[i], value);
        }
    }
    return value;
};
// @lc code=end

