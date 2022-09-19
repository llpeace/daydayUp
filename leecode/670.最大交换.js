/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let str = String(num).split('');
  const len = str.length;
  let reverseStr = [...str].reverse();
  const find = (x, loc) => {
    for (let i = 0; i < loc; i++) {
      if (Number(str[i]) < x) return i;
    }
    return -1;
  }

  for (let i = 9; i >= 0; i--) {
    let fromIndex = 0;
    while(fromIndex < len) {
      let big = reverseStr.indexOf(String(i), fromIndex);
      if (big === -1) break;
      let small = find(i, len - big - 1);
      if (small === -1) {
        fromIndex = big + 1;
      } else {
        const mid = str[small];
        str[small] = reverseStr[big];
        str[len - big - 1] = mid;
        return Number(str.join(''));
      }
    }
  }
  return num;
};
// @lc code=end

