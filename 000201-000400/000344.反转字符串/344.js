/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 方法一：用时 96ms
// 执行用时超过了 85%
// 消耗内存超过了 83%
var reverseString = function(s) {
    if (!s || s.length < 2) {
        return s
    }
    let total = s.length
    for (let i = 0; i < total / 2; i++) {
        let midRst = s[i]
        s[i] = s[total - i - 1]
        s[total - i - 1] = midRst
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
