/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let start = 0
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            reverseStr (result, s, start, i - 1)
            result.push(' ')
            start = i + 1
        } else if (i == s.length - 1) {
            reverseStr (result, s, start, i)
            start = i + 1
        }
    }
    return result.join('')
};

function reverseStr (rst, s, start, end) {
    for (let i = end; i >=start; i --) {
        rst.push(s[i])
    }
}

console.log('result: ', reverseWords("Let's take LeetCode contest"))
console.log('result: ', reverseWords("Hello World!"))
// console.log('result: ', reverseWords())
// console.log('result: ', reverseWords())
console.log('result: ', reverseWords([]))