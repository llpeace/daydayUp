/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], res = [];
    let len = stack.length - 1;
    for(let i = 0; i < temperatures.length; i++) {
        while(len >= 0 && temperatures[i] > temperatures[stack[len]]) {
            const x = stack.pop();
            res[x] = i - x;
            len = stack.length - 1;
        }
        stack.push(i);
        len = stack.length - 1;
    }
    while(len >= 0) {
        const x = stack.pop();
        res[x] = 0;
        len = stack.length - 1;
    }
    return res;
};
// @lc code=end

