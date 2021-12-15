/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const x = [];

    const judge = (y) => {
        while(x.length) {
            const j = x.length - 1;
            if (nums[x[j]] > (y - x[j])) return true;
            x.pop();
        }
        return false
    }
    if (nums.length === 0 || nums.length === 1) return true;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && i !== nums.length - 1) {
            if (!judge(i)) {
                return false;
            }
        } else {
            x.push(i);
        }
    }
    return true;
};
// @lc code=end

