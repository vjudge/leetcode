/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sRst = handleStr(S)
    let tRst = handleStr(T)
    console.log(` S = `, sRst)
    console.log(` T = `, tRst)
    if (sRst == tRst) {
        return true
    }
    return false
};

var handleStr = function (str) {
    let result = ''
    let cnt = 0
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '#') {
            cnt ++
            continue
        } else if (cnt > 0) {
            cnt --
            continue
        }
        result = str[i] + result
    }
    return result
}

console.log('result = ', backspaceCompare("bxj##tw", "bxj###tw"))
// console.log('result = ', backspaceCompare("ab#c", "ad#c"))
// console.log('result = ', backspaceCompare("ab##", "c#d#"))
// console.log('result = ', backspaceCompare("a##c", "#a#c"))
// console.log('result = ', backspaceCompare("a#c", "b"))
