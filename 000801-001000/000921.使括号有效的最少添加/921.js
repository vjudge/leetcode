/**
 * @param {string} s
 * @return {number}
 */
// 方法一：用时 68 ms
// 执行用时超过了 88 %
// 消耗内存超过了 44 %
// 难度: 中等
var minAddToMakeValid = function(s) {
    let ret = 0
    let mstack = 0
    for (const item of s) {
        if (item == ')') {
            if (mstack > 0) {
                mstack --
                continue
            }
            ret ++
            continue
        }
        mstack ++
    }
    return (ret + mstack)
};

console.log(minAddToMakeValid("())"))
console.log(minAddToMakeValid("((("))
console.log(minAddToMakeValid("()"))
console.log(minAddToMakeValid("()))(("))