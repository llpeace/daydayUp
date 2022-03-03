/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    const res = [];
    const len1 = num1.length;
    const len2 = num2.length;
    for(let i = 0; i < len1; i++) {
        let last = 0;
        res[i] = [];
        for (let j = 0; j < len2; j++) {
            res[i][j] = 0;
            const a = num1[len1 - i - 1];
            const b = num2[len2 - j - 1];
            let multiply = (a * b) + last;
            res[i][j] = multiply % 10;
            last = Math.floor(multiply / 10);
        }
        if (last > 0) {
            res[i][len2] = last;
        }
    }
    let m = '';
    let sum = 0;

    for(let i = 0; i < len1; i++) {
        let j = i, k = 0;
        while(j >= 0 && (res[j][k] === 0 || res[j][k])) {
            sum += res[j][k];
            j--;
            k++;
        }
        m = (sum % 10) + m;
        sum = Math.floor(sum / 10);
    }
    for (let i = 1; (res[len1 - 1][i] === 0 || res[len1 - 1][i]); i++) {
        let j = len1 - 1, k = i;
        while(j >= 0 && (res[j][k] === 0 || res[j][k])) {
            sum += res[j][k];
            j--;
            k++;
        }
        m = (sum % 10) + m;
        sum = Math.floor(sum / 10);
    }
    if (sum) {
        m = sum + m;
    }
    return m;
};
// @lc code=end

