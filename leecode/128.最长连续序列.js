/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    const newSet = [...new Set(nums)];
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1);
    }
    for (let i = 0; i < newSet.length; i++) {
        if (!map.get(newSet[i] - 1)) {
            let ans = 0, x = newSet[i];
            while(map.get(x)) {
                ans++;
                x++;
            }
            res = Math.max(res, ans);
        }
    }
    return res;
};
// @lc code=end

