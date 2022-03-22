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
    // let res = 0;
    // let left = [];
    // let right = [];
    // for(let i = 0; i < height.length; i++) {
    //     if (i === 0) left[i] = height[i];
    //     if (i > 0) {
    //         left[i] = Math.max(left[i - 1], height[i]);
    //     }
    // }

    // for(let i = height.length - 1; i >= 0; i--) {
    //     if (i === height.length - 1) right[i] = height[i];
    //     if (i < height.length - 1) {
    //         right[i] = Math.max(right[i + 1], height[i]);
    //     }
    // }

    // for(let i = 0; i < height.length; i++) {
    //     if (left[i] > height[i] && right[i] > height[i]) {
    //         res += Math.min(left[i], right[i]) - height[i];
    //     }
    // }

    // return res;
    const len = height.length - 1;
    let l = 0, r = len;
    let leftMax = 0, rightMax = 0;
    let ans = 0;
    while(l < r) {
        if (height[l] < height[r]) {
            if (height[l] > leftMax) {
                leftMax = height[l];
            } else {
                ans += (leftMax - height[l]);
            }
            l++;
        } else {
            if (height[r] > rightMax) {
                rightMax = height[r];
            } else {
                ans += (rightMax - height[r]);
            }
            r--;
        }
    }
    return ans;
};
// @lc code=end

