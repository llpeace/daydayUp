/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => (a - b));
    if (nums.length === 1) return nums[0];
    for(let i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums[i] !== nums[i + 1]) {
                return nums[i];
            }
        } else if (i === nums.length - 1) {
            if (nums[i] !== nums[i - 1]) {
                return nums[i];
            }
        } else if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};
// @lc code=end

