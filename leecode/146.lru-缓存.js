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
    this.len = capacity;
    this.realLen = 0;
    this.map = new Map();
    this.start = null;
    this.end = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const res = this.map.get(key);
    // console.log('get', key, res);
    if (!res) return -1;
    const { value, last, next } = res;
    if (last) {
        last.next = next;
    }
    if (next) {
        next.last = last;
    }
    if (!last && next) {
        this.start = next;
    }
    if (!next && last) {
        this.end = last;
    }
    const node = { key, value, next: null };
    this.end.next = node;
    node.last = this.end;
    this.end = node;
    this.map.set(key, node);
    // console.log('get', key, this.start, this.end)
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // console.log(key, value);
    const res = this.map.get(key);
    if (this.realLen < this.len && !res) {
        this.realLen = this.realLen + 1;
        // console.log(key, this.realLen);
    } else if (this.realLen >= this.len && !res) {
        if (this.start) {
            const { key: startKey, next } = this.start;
            this.map.set(startKey, undefined);
            if (next) {
                next.last = null;
            }
            this.start = next;
        }
    }
    let node = { key, value };
    if (!res) {
        node.last = this.end;
        node.next = null;
        if (this.end) {
            this.end.next = node;
        }
        this.end = node;
        this.map.set(key, node);
    } else {
        const { last, next } = res;
        if (last) {
            last.next = next;
        }
        if (next) {
            next.last = last;
        }
        if (!last && next) {
            this.start = next;
        }
        if (!next && last) {
            this.end = last;
        }
        node.last = this.end;
        node.next = null;
        if (this.end) {
            this.end.next = node;
        }
        this.end = node;
        this.map.set(key, node);
    }
    if (this.realLen === 1) {
        this.start = node;
    }
};


/**
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

