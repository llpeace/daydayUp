/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const obj = {};
    const mySlice = (str, l, j) => {
        let ans = '';
        const len = j || str.length;
        for (let i = l; i < len; i++) {
            ans = ans + str[i];
        }
        return ans;
    }
    const search = (left, right, num) => {
        if (right.length === 0 && num === 0) {
            const a = mySlice(left, 1);
            if (!obj[a]) {
                obj[a] = true;
                res.push(a);
            }
            return;
        }
        if (right.length > num * 3) {
            return;
        }
        if (right[0] === '0') {
            const l = left + '.' + right[0];
            const r = mySlice(right, 1);
            search(l, r, num - 1);
        } else {
            for (let i = 1; i <= Math.min(3, right.length); i++) {
                const l = left + '.';
                const r1 = mySlice(right, 0, i);
                const r = mySlice(right, i);
                if (Number(r1) <= 255 && Number(r1) >= 0) {
                    search(l + r1, r, num - 1);
                }
            }
        }
    }
    search('', s, 4);

    return res;
};
// @lc code=end

