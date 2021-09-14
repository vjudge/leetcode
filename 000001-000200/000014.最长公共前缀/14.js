/**
 * @param {string[]} strs
 * @return {string}
 */
// 方法一：用时 68ms
// 执行用时超过了 94%
// 消耗内存超过了 56%
var longestCommonPrefix = function(strs) {
    if (!strs || !strs[0]) { return '' }
    if (strs.length === 1) { return strs[0] }
    let result = ''
    let total = strs[0].length
    for (let i = 0; i < total; i++) {
        let flag = true
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j][i] || strs[0][i] != strs[j][i]) {
                flag = false
                break
            }
        }
        if (!flag) { break }
        result += strs[0][i]
    }
    return result
}

console.log(`longestCommonPrefix: `, longestCommonPrefix(["flower","flow","flight"]))
console.log(`longestCommonPrefix: `, longestCommonPrefix(["dog","racecar","car"]))
