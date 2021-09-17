/**
 * @param {number[]} nums
 * @return {boolean}
 */
// // 超时
// var find132pattern = function(nums) {
//   for (let k = 2; k < nums.length; k++) {
//     for (let i = 0; i < k-1; i++) {
//       if (nums[i] < nums[k]) {
//         for (let j = i + 1; j < k; j++) {
//           if (nums[k] < nums[j]) {
//             return true
//           }
//         }
//       }
//     }
//   }
//   return false
// };


var find132pattern = function (nums) {

}


console.log(find132pattern([1, 2, 3, 4]))
console.log(find132pattern([3, 1, 4, 2]))
console.log(find132pattern([-1, 3, 2, 0]))
