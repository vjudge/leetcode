/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法一：用时 84 ms
// 执行用时超过了 78 %
// 消耗内存超过了 54 %
// 难度: 简单
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    let stotal = {}
    let ttotal = {}
    for (const item of s) {
        if (!stotal[item]){
            stotal[item] = 1
            continue
        }
        stotal[item] ++
    }
    for (const item of t) {
        if (!ttotal[item]){
            ttotal[item] = 1
            continue
        }
        ttotal[item] ++
    }
    if (stotal.length != ttotal.length) {
        return false
    }
    for (const key in stotal) {
        if (stotal[key] != ttotal[key]) {
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "cat"))