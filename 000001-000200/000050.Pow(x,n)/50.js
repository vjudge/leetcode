/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// // 方法一：用时 64 ms
// // 执行用时超过了 97 %
// // 消耗内存超过了 87 %
// // 难度: 中等
// var myPow = function(x, n) {
//     if (n === 0) {
//         return 1
//     }
//     if (n === 1) {
//         return x
//     }
//     let tmpN = n
//     let flag = false
//     if (n < 0) {
//         tmpN = -n
//         flag = true
//     }
//     let result = 1
//     while (tmpN > 0) {
//         if (tmpN % 2 === 0) {
//             x = x * x
//             tmpN = tmpN / 2
//         } else {
//             result = result * x
//             tmpN -= 1
//         }
//     }
//     if (flag) {
//         result = 1 / result
//     }
//     return result
// }

// 方法二: 用时 64 ms
// 执行用时超过了 97 %
// 消耗内存超过了 94 %
// 难度: 中等
var myPow = function(x, n) {
    if (n == 0) {
        return 1
    }
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    if (n % 2 == 1) {
        return x * myPow(x, n - 1)
    }

    return myPow(x * x, n / 2)
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
