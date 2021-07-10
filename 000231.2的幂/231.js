/**
 * @param {number} n
 * @return {boolean}
 */
// 战胜90.72%
var isPowerOfTwo = function(n) {
    if (n === 1 || n === 2) {
        return true
    }
    let num = 2
    while (true) {
        if (num === n) {
            return true
        }
        if (num > n) {
            return false
        }
        if (num * num < n) {
            num = num * num
        } else {
            num = num * 2
        }
    }
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))
console.log(isPowerOfTwo(1024))
