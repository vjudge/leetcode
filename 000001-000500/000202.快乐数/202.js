/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hfactors = {}
    while (n != 1) {
        let sum = 0
        while (n) {
            sum += (n % 10) * (n % 10)
            n = parseInt(n / 10)
        }
        n = sum
        if (hfactors[n]) {
            break
        }
        hfactors[n] = true
    }
    return n == 1
};

console.log(isHappy(9))
console.log(isHappy(19))
console.log(isHappy(2))


