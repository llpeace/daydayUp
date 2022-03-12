/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = 0;
    let sum = 1;
    if (nums.length === 1) return 1;
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum ++;
        } else {
            sum = 1;
        }
        res = Math.max(sum, res);
    }
    return res;
};
// @lc code=end

