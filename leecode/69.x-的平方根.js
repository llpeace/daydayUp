/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let res = 1;
    // for (let i = 1; i <= Math.floor(x / 2); i++) {
    //     if (i * i <= x) {
    //         res = i;
    //     } else {
    //         break;
    //     }
    // }
    if (x === 0) return 0;
    let l = 1, r = Math.floor(x / 2);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid <= x) {
            l = mid + 1;
            res = mid;
        } else {
            r = mid - 1;
        }
    }
    return res;
};
// @lc code=end

