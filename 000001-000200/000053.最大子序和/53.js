/**
 * @param {number[]} nums
 * @return {number}
 */
// // 方法一：用时 720ms
// // 执行用时超过了 87%
// // 消耗内存超过了 98%
// var maxSubArray = function(nums) {
//   let sums = [nums[0]]
//   let result = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     let cursums = []
//     for (let j = 0; j < sums.length; j++) {
//       let tmp = sums[j] + nums[i]
//       cursums.push(tmp)
//       if (result < tmp) {
//         result = tmp
//       }
//     }
//     cursums.push(nums[i])
//     if (result < nums[i]) {
//       result = nums[i]
//     }
//     sums = cursums
//   }
//   return result
// };


// 方法二：用时 720ms
// 执行用时超过了 87%
// 消耗内存超过了 98%
var maxSubArray = function(nums) {

}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([0]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-100000]))
