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
    let map = [];
    let res = [];
    let ma = 0, mi = Number.MAX_SAFE_INTEGER;
    let upperArr = [];
    const add = (num) => {
        const index = upperArr.findIndex(item  => item >= num);
        if (index < 0) upperArr.push(num);
        else {
            upperArr.splice(index, 0, num);
        }
    }
    temperatures.forEach((item, index) => {
        map[item] = map[item] ? [...map[item], index] : [index];
        ma = Math.max(item, ma);
        mi = Math.min(item, mi);
    });
    const findAns = (index) => {
        let ans = upperArr.find(item => item > index);
        if (ans) return ans - index;
        return 0;
    }
    for(let i = ma; i >= mi; i --) {
        if (map[i]) {
            for(let j = 0; j < map[i].length; j++) {
                res[map[i][j]] = findAns(map[i][j]);
            }
            for(let j = 0; j < map[i].length; j++) {
                add(map[i][j]);
            }
        }
    }
    return res;
};
// @lc code=end

