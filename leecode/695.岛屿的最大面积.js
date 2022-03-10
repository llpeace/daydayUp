/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    const vis = [];
    const m = grid.length;
    const n = grid[0].length
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const check = (x, y) => {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0) return false;
        if (!vis[x]) {
            vis[x] = [];
            vis[x][y] = 1;
            return true;
        }
        if (vis[x] && !vis[x][y]) {
            vis[x][y] = 1;
            return true;
        }
        return false;
    }
    const dfs = (x, y) => {
        let ans = 1;
        for (let i = 0; i < dir.length; i++) {
            const newx = x + dir[i][0];
            const newy = y + dir[i][1];
            if (check(newx, newy)) {
                ans += dfs(newx, newy);
            }
        }
        return ans;
    }
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && check(i, j)) {
                res = Math.max(res, dfs(i, j));
            }
        }
    }
    return res;
};
// @lc code=end

