/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    nums.forEach((item, index) => {
        map[String(item)] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        const res = String(target - nums[i]);
        if (map[res] !== undefined && map[res] !== i) {
            return [i, map[res]];
        }
    }
};