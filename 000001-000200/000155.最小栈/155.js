/**
 * initialize your data structure here.
 */
// 方法一：用时 124ms
// 执行用时超过了 54%
// 消耗内存超过了 73%
var MinStack = function() {
  this.stack = []
  this.min_stack = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
