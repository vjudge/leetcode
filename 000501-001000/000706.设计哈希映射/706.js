/**
 * Initialize your data structure here.
 */
// 方法一：用时 208ms
// 执行用时超过了 64%
// 消耗内存超过了 13%
var MyHashMap = function() {
  this.size = 793 // 793
  this.data = new Array(this.size).map(() => new Array())
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let index = key % this.size
  if (!this.data[index]) {
    this.data[index] = [[key, value]]
    return true
  }
  let nindex = this.data[index].findIndex(([nkey, data]) => (nkey == key))
  if (nindex === -1) {
    return this.data[index].push([key, value])
  }
  return this.data[index][nindex] = [key, value]
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let index = key % this.size
  if (!this.data[index]) {
    return -1
  }
  let nindex = this.data[index].findIndex(([nkey, data]) => (nkey == key))
  return (nindex === -1) ? -1 : this.data[index][nindex][1]
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  let index = key % this.size
  if (!this.data[index]) {
    return true
  }
  let nindex = this.data[index].findIndex(([nkey, data]) => (nkey == key))
  return (nindex === -1) ? true : this.data[index].splice(nindex, 1)
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
 var obj = new MyHashMap()
 console.log('obj: ', JSON.stringify(obj))
 obj.put(1, 'a')
 obj.put(11, 'b')
 obj.put(2, 'c')
 console.log('obj: ', obj)
 var param_2 = obj.get(11)
 console.log('param_2: ', param_2)
 obj.remove(11)
 obj.remove(21)
 console.log('obj: ', obj)
