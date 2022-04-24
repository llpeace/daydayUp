/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => (a - b));

    let min = Number.MAX_SAFE_INTEGER;
    let res = 0;

    for (let i = 0; i <= nums.length - 3; i++) {
        const x = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right && left >= 0 && right < nums.length) {
            let sum = x + nums[left] + nums[right];
            let diff = Math.abs(sum - target);
            if (diff < min) {
                min = diff;
                res = sum;
            }
            if (diff === 0) return sum;
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
};
// @lc code=end

