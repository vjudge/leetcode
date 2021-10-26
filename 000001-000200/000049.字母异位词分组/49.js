/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 方法一：用时 148 ms
// 执行用时超过了 27 %
// 消耗内存超过了 81 %
// 难度: 中等
var groupAnagrams = function(strs) {
    if (strs.length == 0) {
        return strs
    }
    if (strs.length == 1) {
        return [strs]
    }
    let ret = new Map()
    for (const item of strs) {
        let key = Array.from(item).sort().toString()
        let list = ret.get(key) ? ret.get(key) : new Array()
        list.push(item)
        ret.set(key, list)
    }
    return Array.from(ret.values())
};

// 方法二：用时 112 ms
// 执行用时超过了 88 %
// 消耗内存超过了 77 %
// 难度: 简单
var groupAnagrams = function(strs) {
    if (strs.length == 0) {
        return strs
    }
    if (strs.length == 1) {
        return [strs]
    }
    let ret = new Map()
    for (const item of strs) {
        let key = item.split("").sort().join("")
        ret.get(key) ? ret.get(key).push(item) : ret.set(key, [item])
    }
    return Array.from(ret.values())
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
