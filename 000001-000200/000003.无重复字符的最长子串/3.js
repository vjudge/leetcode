/**
 * @param {string} s
 * @return {number}
 */
// 方法一：用时 536ms
// 执行用时超过了 6%
// 消耗内存超过了 0%
// 难度: 中等
// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) {
//     return s.length
//   }
//   let max = 1
//   for (let i = 0; i < s.length; i++) {
//     let smap = { [s[i]]: true }
//     let submax = 1
//     for (let j = i + 1; j < s.length; j++) {
//       if (smap[s[j]]) {
//         submax = j - i
//         break
//       }
//       if (j === s.length - 1) {
//         submax = j - i + 1
//       }
//       smap[s[j]] = true
//     }
//     if (max < submax) {
//       max = submax
//     }
//   }
//   return max
// };

// 方法二：用时 92ms
// 执行用时超过了 80%
// 消耗内存超过了 84%
// 难度: 中等
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length
  }
  let max = 1
  let start = 0
  let smap = new Map()
  for (let i = 0; i < s.length; i++) {
    // console.log(`s[i]=`, s[i], smap, smap.get(s[i]))
    if (smap.has(s[i])) {
      start = Math.max(start, smap.get(s[i]) + 1)
    }
    // console.log(`i=${i} start=${start}`)
    max = Math.max(max, i + 1 - start)
    smap.set(s[i], i)
  }
  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('auxd'))
console.log(lengthOfLongestSubstring('cdd'))
