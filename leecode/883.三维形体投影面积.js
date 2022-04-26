/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let x = grid.length;
    let res = 0;
    for (let i = 0; i < x; i++) {
        let l = 0, r = 0;
        for (let j = 0; j < x; j++) {
            l = Math.max(l, grid[i][j]);
            r = Math.max(r, grid[j][i]);
            if (grid[i][j] !== 0) {
                res += 1;
            }
        }
        res += l;
        res += r;
    }
    return res;
};
// @lc code=end

