/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sort = (a, b) => {
        const [aLeft, aRight] = a;
        const [bLeft, bRight] = b;
        if (aLeft < bLeft) return -1;
        else if (aLeft > bLeft) {
            return 1;
        } else {
            return aRight - bRight;
        }
    }

    const arr = intervals.sort(sort);
    let res = [], last = -1, left = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > last) {
            if (i !== 0) {
                res.push([left, last]);
            }
            left = arr[i][0];
        }
        last = Math.max(arr[i][1], last);
    }
    res.push([left, last]);
    return res;
};
// @lc code=end

