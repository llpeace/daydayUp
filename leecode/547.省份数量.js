/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const vis = [];
    const len = isConnected.length;
    let res = 0;
    const dfs = y => {
        vis[y] = true;
        for (let i = 0; i < len; i++) {
            if (!vis[i] && isConnected[y][i] === 1) {
                dfs(i);
            }
        }
    }
    for (let i = 0; i < len; i++) {
        if (!vis[i]) {
            dfs(i);
            res++;
        }
    }

    return res;
    // [1,0,0,1]
    // [0,1,1,0]
    // [0,1,1,1]
    // [1,0,1,1]
    // [[1,0,0,1], [0,1,1,0], [0,1,1,1], [1,0,1,1]]

    // [1,1,1,1,1]
    // [1,1,1,1,1]
    // [1,1,1,1,1]
    // [1,1,1,1,1]
    // [1,1,1,1,1]
    // [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]
};
// @lc code=end

