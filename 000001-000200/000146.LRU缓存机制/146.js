/**
 * @param {number} capacity
 */
// 方法一：用时 600ms
// 执行用时超过了 92%
// 消耗内存超过了 51%
// 难度：中等
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1
  }
  let result = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, result)
  return result
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  if (this.cache.size === this.capacity) {
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
  return true
};

let obj = new LRUCache(3)
obj.put(1, 1)
obj.put(2, 2)
console.log(obj.get(1))
obj.put(3, 3)
console.log(obj.get(1))
obj.put(4, 4)
obj.put(5, 5)
console.log(obj.get(1))
console.log(obj.get(2))
console.log(obj.get(3))
console.log(obj.get(4))
console.log(obj.get(5))

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
