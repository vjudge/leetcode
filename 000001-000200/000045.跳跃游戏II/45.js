/**
 * @param {number[]} nums
 * @return {number}
 */
 // 方法一: 用时 76ms
 // 执行用时超过了 92%
 // 消耗内存超过了 92%
 // 难度: 中等
var jump = function(nums) {
  let ret = 0
  let prosition = nums.length - 1
  while (prosition > 0) {
    for (let i = 0; i < prosition; i ++) {
      if (i + nums[i] >= prosition) {
        prosition = i
        ret ++
        break
      }
    }
  }
  return ret
};

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
