/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const map = new Map();
  const res = [];
  const dfs = (ans = []) => {
    if (ans.length === nums.length && !map.get(ans.join(','))) {
      map.set(ans.join(','), 1);
      res.push(ans);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!ans.includes(nums[i])) {
        dfs([...ans, nums[i]]);
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    dfs([nums[i]]);
  }
  return res;
};
// @lc code=end

