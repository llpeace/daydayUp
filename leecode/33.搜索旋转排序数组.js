/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            mid = i;
            break;
        }
    }
    let left = 0;
    let right = mid;
    while(left <= right) {
        const m = Math.floor((left + right) / 2);
        if (nums[m] > target) {
            right = m - 1;
        } else if (nums[m] < target) {
            left = m + 1;
        } else {
            return m;
        }
    }

    left = mid + 1;
    right = nums.length - 1;
    while(left <= right) {
        const m = Math.floor((left + right) / 2);
        if (nums[m] > target) {
            right = m - 1;
        } else if (nums[m] < target) {
            left = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};
// @lc code=end

