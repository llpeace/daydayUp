/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];let newNums = [];
    let resArr = [];
    let mapp = new Map();

    for (let i = 0; i < nums.length; i ++) {
        const count = mapp.get(nums[i]) || 0;
        if (count < 4) {
            mapp.set(nums[i], count + 1);
            newNums.push(nums[i]);
        }
    }

    const check = list => {
        const newList = list.sort((a, b) => a - b).join(',');
        if (resArr.indexOf(newList) < 0) {
            resArr.push(newList);
            return true;
        }
        return false;
    };
    const find = (subscript, sum, result) => {
        if (sum === target && result.length === 4 && check(result)) {
            res.push(result);
            return;
        }
        if (result.length >= 4) return;
        if (subscript === newNums.length) return;
        for (let i = subscript; i < newNums.length; i++) {
            find(i + 1, sum + newNums[i], [ ...result, newNums[i] ]);
        }
        return;
    };
    find(0, 0, []);
    return res;
};
// @lc code=end

