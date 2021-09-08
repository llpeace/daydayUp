/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = [];
    const count = {};
    const map = {};
    nums.forEach(item => {
        const x = map[item];
        if (x) {
            map[item] = x + 1;
        } else {
            map[item] = 1;
        }
    });
    nums.forEach(item => {
        if (!count[item]) {
            obj.push({
                value: item,
                count: map[item],
            })
            count[item] = 1;
        }
    });
    obj.sort((a, b) => {
        if (a.count > b.count) return -1;
        return 1;
    });
    const flag = obj[k - 1].count;
    const index = obj.findIndex(item => item.count < flag);
    let res;
    if (index === -1) res = obj.map(item => item.value);
    else {
        res = obj.slice(0, index).map(item => item.value);
    }
    return res;
};
// @lc code=end

