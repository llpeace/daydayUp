/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let left = [];
    let right = [];
    for(let i = 0; i < height.length; i++) {
        if (i === 0) left[i] = height[i];
        if (i > 0) {
            left[i] = Math.max(left[i - 1], height[i]);
        }
    }

    for(let i = height.length - 1; i >= 0; i--) {
        if (i === height.length - 1) right[i] = height[i];
        if (i < height.length - 1) {
            right[i] = Math.max(right[i + 1], height[i]);
        }
    }

    for(let i = 0; i < height.length; i++) {
        if (left[i] > height[i] && right[i] > height[i]) {
            res += Math.min(left[i], right[i]) - height[i];
        }
    }

    return res;
    // let left = height[0], right = height[height.length - 1];
};
// @lc code=end

