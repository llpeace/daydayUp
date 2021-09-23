/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
    this._arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this._arr.length - 1;
    return this._arr[len];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this._arr[0];
    this._arr.forEach(item => {
        min = Math.min(item, min);
    });
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

