/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [], newNums = [];
    const map = new Map();
    const newMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const count = newMap.get(nums[i]) || 0;
        if (nums[i] === 0) {
            if (count < 3) {
                newMap.set(nums[i], count + 1);
                newNums.push(nums[i]);
            }
        } else {
            if (count < 2) {
                newMap.set(nums[i], count + 1);
                newNums.push(nums[i]);
            }
        }
    }

    const filter = (arr) => {
        return arr.sort((a, b) => (a - b)).join(',');
    }

    const check = (sum, a, b) => {
        const count = newMap.get(sum);
        let x = 1;
        if (a === sum) x += 1;
        if (b === sum) x += 1;
        if (x > count) return false;
        return true;
    }

    for(let i = 0; i < newNums.length; i++) {
        for(let j = i + 1; j < newNums.length; j++) {
            const sum = -newNums[i]-newNums[j];
            const str = filter([newNums[i], newNums[j], sum]);
            const f = map.get(str);
            if (!f && newMap.get(sum) && check(sum, newNums[i], newNums[j])) {
                map.set(str, true);
                result.push([ newNums[i], newNums[j], sum ]);
            }
        }
    }

    return result;
};
// @lc code=end

