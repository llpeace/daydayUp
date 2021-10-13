/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 0;
    while(x < nums.length) {
        if (nums.indexOf(nums[x]) !== x) {
            nums.splice(x, 1);
        } else {
            x++ ;
        }
    }
    return nums.length;
};
// @lc code=end

