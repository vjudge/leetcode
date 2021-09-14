/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n == 1) {
//         return 1
//     }
//     if (n == 2) {
//         return 2
//     }
//     if (n == 0) {
//         return 0
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };


// var climbStairs = function(n) {
//     if (n == 1) {
//         return 1
//     }
//     if (n == 2) {
//         return 2
//     }
//     if (n == 0) {
//         return 0
//     }
//     let ary = [1, 2]
//     for (let i = 2; i < n; i ++) {
//         ary.push(ary[i - 1] + ary[i - 2])
//     }
//     return ary[n - 1]
// };


var climbStairs = function(n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    if (n == 0) {
        return 0
    }
    let n1 = 2
    let n2 = 1
    for (let i = 3; i <= n; i ++) {
        let tmp = n1 + n2
        n2 = n1
        n1 = tmp
    }
    return n1
};


console.log(`1: `, climbStairs(1))
console.log(`2: `, climbStairs(2))
console.log(`3: `, climbStairs(3))
console.log(`4: `, climbStairs(4))
console.log(`5: `, climbStairs(5))
