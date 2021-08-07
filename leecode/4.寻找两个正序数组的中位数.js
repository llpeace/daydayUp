/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length - 1;
    const len2 = nums2.length - 1;

    let k = Math.floor((len1 + len2) / 2);
    let flag = (len1 + len2) % 2 === 0;
    let offset1 = 0;
    let offset2 = 0;
    let num1 = nums1[offset1], num2 = nums2[offset2];
    let res = 0;

    while(k) {
        k = Math.floor(k / 2) - 1;
        num1 = (offset1 + k) > len1 ? nums1[len1] : nums1[offset1 + k];
        num2 = (offset2 + k) > len2 ? nums2[len2] : nums2[offset2 + k];
        if(num1 >= num2) {
            offset2 = offset2 + k + 1;
        } else {
            offset1 = offset1 + k + 1;
        }
        k = k - Math.floor(k / 2);
        if (offset1 > len1 || offset2 > len2) break;
    }
    if (k === 1) {
        if (offset1 <= len1 && offset2 <= len2) {
            if (!flag) res = Math.min(num1[offset1])
        }
    }
};
// @lc code=end

