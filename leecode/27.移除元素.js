/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ans = nums.length;
    while(nums.indexOf(val) >= 0) {
        let x = nums.indexOf(val);
        nums.splice(x, 1);
        ans--;
    }
    return ans;
};
// @lc code=end

