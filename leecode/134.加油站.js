/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const res = [];
    let x = 0;
    for(let i = 0; i < gas.length; i++) {
        res[i] = gas[i] - cost[i];
        x += res[i];
    }
    if (x < 0) return -1;
    for(let i = 0; i < gas.length; i++) {
        let y = 0, flag = 1;
        for(let j = i; j < 2 * gas.length; j++) {
            y += res[j % gas.length];
            if (y < 0) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

