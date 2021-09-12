/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 方法一：用时 68ms
// 执行用时超过了 87%
// 消耗内存超过了 76%
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            break
        }
        if (numbers[i] + numbers[j] < target) {
            i ++
        }
        if (numbers[i] + numbers[j] > target) {
            j --
        }
    }
    return [i + 1, j + 1]
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 5, 9], 8));
