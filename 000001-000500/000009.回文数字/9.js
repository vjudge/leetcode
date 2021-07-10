/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    if (x < 10) {
        return true
    }
    let initX = x
    let palin = 0
    while (initX > 0) {
        let midrx = initX % 10
        palin = palin * 10 + midrx
        initX = parseInt(initX / 10)
    }
    return palin === x
}

console.log(`=== isPalindrome: `, isPalindrome(112211))
