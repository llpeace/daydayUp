/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const x = {};
    nums.forEach(item => {
        if (x[item]) {
            x[item] = Number(x[item]) + 1;
        } else {
            x[item] = 1;
        }
    })

    let val = 0;
    for(let i = 0; i < nums.length; i++) {
        while (!x[val] || Number(x[val]) <= 0) {
            val = Number(val) + 1;
        }
        nums[i] = val;
        x[val] = Number(x[val]) - 1;
    }
};
// @lc code=end

