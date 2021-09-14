/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length === 0) {
        return 0
    }
    let romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let douRomans = {
        I: { V: 4, X: 9 },
        X: { L: 40, C: 90 },
        C: { D: 400, M: 900 }
    }
    let total = s.length
    let result = 0
    for (let i = 0; i < total; i++) {
        if (douRomans[s[i]] && i < total - 1 && douRomans[s[i]][s[i+1]]) {
            result += douRomans[s[i]][s[i+1]]
            i ++
        } else {
            result += romans[s[i]]
        }
    }
    return result
}

console.log(`romanToInt: `, romanToInt('III'))
console.log(`romanToInt: `, romanToInt('IV'))
console.log(`romanToInt: `, romanToInt('IX'))
console.log(`romanToInt: `, romanToInt('LVIII'))
console.log(`romanToInt: `, romanToInt('MCMXCIV'))
