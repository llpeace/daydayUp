/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const newP = pieces.toString().split(',');
  const text = arr.join(',');
  for(let i = 0; i < arr.length; i++) {
    if (newP.indexOf(String(arr[i])) === -1) return false;
  }
  for(let i = 0; i < pieces.length; i++) {
    const str = pieces[i].toString();
    if (text.indexOf(str) === -1) return false;
  }
  return true;
};
// @lc code=end

