/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = -Number.MAX_SAFE_INTEGER;
    let sum = 0;
    nums.forEach(item => {
        sum += item;
        res = Math.max(res, sum);
        if (sum < 0) sum = 0;
    })
    return res;
};
// @lc code=end

