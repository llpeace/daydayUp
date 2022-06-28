/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.len = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const res = this.cache.get(key);
    if (!res && res !== 0) return -1;
    this.cache.delete(key);
    this.cache.set(key, res);
    return res;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.len) {
        const val = this.cache.keys().next().value;
        this.cache.delete(val);
    }
};


/**
 * 使用map的keys()方法，返回一个Iterator对象，可以获取map中的第一个元素的key,
 * 通过删除后再添加的方式，重新放在队首。
 * [[10],[10,13],[3,17],[6,11],[10,5],
 * [9,10],[13],[2,19],[2],[3],[5,25],
 * [8],[9,22],[5,5],[1,30],[11],[9,12],
 * [7],[5],[8],[9],[4,30],[9,3],[9],[10],
 * [10],[6,14],[3,1],[3],[10,11],[8],
 * [2,14],[1]]
 *
 * 1 30 -> 5 5 -> 4 30 -> 9 3 -> 6 14 -> 3 1 -> 10 11 -> 2 14
 */
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

