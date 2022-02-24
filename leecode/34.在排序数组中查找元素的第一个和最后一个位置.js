/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result1 = -1, result2 = -1;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    if (nums[right] === target) {
        result1 = right;
    }

    left = 0;
    right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            if (nums[mid] === target) {
                result2 = mid;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [result1, result2];
};
// @lc code=end

