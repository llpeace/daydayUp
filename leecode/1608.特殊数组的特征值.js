/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  const num = [...nums].sort((a, b) => (b - a));
  for (let i = 0; i <= nums.length; i++) {
    if (i === 0 && num[0] < 0) return 0;
    if (i !== 0 && num[i] < i && num[i - 1] >= i) return i;
    if (i === nums.length && num[i - 1] >= i) return i;
  }
  return -1;
};
// @lc code=end

