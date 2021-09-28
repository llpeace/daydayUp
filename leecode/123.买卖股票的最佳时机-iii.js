/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length - 1;
    let minn = [], minv = prices[0];
    let maxx = [], maxv = prices[len];
    let resLeft = [], resRight = [];
    prices.forEach(item => {
        if (item < minv) {
            minv = item;
        }
        minn.push(minv);
    })
    
    for (let i = len; i >= 0; i--) {
        if (prices[i] > maxv) {
            maxv = prices[i];
        }
        maxx.unshift(maxv);
    }

    let res = maxx[len] - minn[len];

    let leftMax = prices[0] - minn[0];
    for (let i = 0; i <= len; i++) {
        if (leftMax < prices[i] - minn[i]) {
            leftMax = prices[i] - minn[i];
        }
        resLeft[i] = leftMax;
    }

    let rightMax = maxx[len] - prices[len];
    for (let i = len; i >= 0; i--) {
        if (rightMax < maxx[i] - prices[i]) {
            rightMax = maxx[i] - prices[i];
        }
        resRight[i] = rightMax;
    }

    for (let i = 1; i <= len; i++) {
        res = Math.max(resLeft[i - 1] + resRight[i], res);
    }
    return res;

    //[3,2,6,5,0,3]
};
// @lc code=end

