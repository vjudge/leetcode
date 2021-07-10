/**
 * @param {number} num
 * @return {boolean}
 */
// 战胜38.78%
var isPowerOfFour = function(num) {
    if (num === 1) {
        return true
    }
    if (!num) {
        return false
    }
    let base = 4
    while (base < num) {
        if (base * base <= num) {
            base = base * base
        } else {
            base = base * 4
        }
    }
    if (base === num) {
        return true
    }
    return false
};

console.log(isPowerOfFour(4))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
