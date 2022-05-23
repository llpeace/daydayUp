/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const map = new Map();

    const find = (sum, ans) => {
        if (target < sum) return;
        if (target === sum) {
            ans = ans.sort((a, b) => (a - b));
            const str = ans.join(',');
            if (!map.get(str)) {
                res.push(ans);
                map.set(str, 1);
            }
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            find(sum + candidates[i], [...ans, candidates[i]]);
        }
    }

    find(0, []);

    return res;
};
// @lc code=end

