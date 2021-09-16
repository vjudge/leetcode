/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 难度: 中等
var myPow = function(x, n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return x
    }
    let tmpN = n
    let flag = false
    if (n < 0) {
        tmpN = -n
        flag = true
    }
    let result = 1
    while (tmpN > 0) {
        if (tmpN % 2 === 0) {
            x = x * x
            tmpN = tmpN / 2
        } else {
            result = result * x
            tmpN -= 1
        }
    }
    if (flag) {
        result = 1 / result
    }
    return result
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
