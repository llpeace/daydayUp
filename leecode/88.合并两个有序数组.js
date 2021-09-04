/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = 0, r = 0;
    const newNums1 = nums1.slice(0, m);
    let result = [];
    while(l < m || r < n) {
        if (l < m && r < n && newNums1[l] <= nums2[r]) {
            result.push(newNums1[l]);
            l ++;
        } else if (r < n && newNums1[l] >= nums2[r]) {
            result.push(nums2[r]);
            r ++;
        } else {
            if (l >= m) {
                result.push(nums2[r]);
                r ++;
            } else if (r >= n) {
                result.push(newNums1[l]);
                l ++;
            }
        }
    }
    for(let i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }
};
// @lc code=end

