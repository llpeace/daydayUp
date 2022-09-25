/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  const checkGood = (arr) => {
    let flag = false;
    for(let i = 0; i < arr.length; i++) {
      if (![1, 0, 8, 2, 5, 6, 9].includes(Number(arr[i]))) return false;
      if ([2, 5, 6, 9].includes(Number(arr[i]))) {
        flag = true;
      }
    }
    return flag;
  }
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (checkGood(String(i).split(''))) res ++;
  }
  return res;
};
// @lc code=end

