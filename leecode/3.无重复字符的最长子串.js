/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = -1, res = 0;
  const map = {};
  // Array.prototype.forEach.call(s, function (item, index) {
  //   right = index;
  //   res = Math.max(right - left, res);
  //   if ((map[item] || map[item] === 0) && left <= map[item]) {
  //     left = map[item] + 1;
  //   }
  //   map[item] = index;
  // })
  // res = Math.max(right + 1 - left, res);

  for(let i = 0; i < s.length; i++) {
    let now = map[s.charAt(i)];
    if((now || now === 0) && left <= now) {
      left = now + 1;
    }
    map[s.charAt(i)] = i;
    res = Math.max(i + 1 - left, res);
  }
  res = Math.max(s.length - left, res);
  return res;
};
// @lc code=end

