/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0, right = height.length - 1;
    let result = 0;

    while(left < right) {
        result = Math.max(result, (right - left) * Math.min(height[left], height[right]));
        if (height[left] >= height[right]) {
            right --;
        } else {
            left ++;
        }
    }

    result = Math.max(result, Math.max(0, (right - left)) * Math.min(height[left], height[right]));

    return result;
};
// @lc code=end

