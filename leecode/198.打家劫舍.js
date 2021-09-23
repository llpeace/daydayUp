/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let res = [[]];
    res[0][0] = 0;
    res[0][1] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        res[i] = [];
        res[i][0] = Math.max(res[i-1][0], res[i-1][1]);
        res[i][1] = res[i-1][0] + nums[i];
    }
    const x = nums.length - 1;
    return Math.max(res[x][0], res[x][1]);
};
// @lc code=end

