/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = [];
    const news = s.split('');

    const match = (kuohao) => {
        switch (kuohao) {
            case '(':
                return ')';
            case '[':
                return ']';
            case '{':
                return '}';
        }
    }

    for(let i = 0; i < news.length; i++) {
        let item = news[i];
        if (item === '(' || item === '[' || item === '{') {
            left.push(item);
        } else {
            if (left.length && item === match(left[left.length - 1])) {
                left.pop();
            } else {
                return false;
            }
        }
    }
    if (left.length) {
        return false;
    }
    return true;
};
// @lc code=end

