/**
 * @param {number[]} nums
 * @return {number}
 */
//  // 方法一: 用时 84ms
//  // 执行用时超过了 41%
//  // 消耗内存超过了 70%
//  // 难度: 中等
// var jump = function(nums) {
//   let ret = 0
//   let prosition = nums.length - 1
//   while (prosition > 0) {
//     for (let i = 0; i < prosition; i ++) {
//       if (i + nums[i] >= prosition) {
//         prosition = i
//         ret ++
//         break
//       }
//     }
//   }
//   return ret
// };

// 方法二: 用时 76 ms
// 执行用时超过了 67 %
// 消耗内存超过了 87 %
// 难度: 中等
function jump(nums) {
  let max = 0
  let ret = 0
  let minstep = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i)
    if (i == minstep) {
      ret ++
      minstep = max
    }
  }
  return ret
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
