/**
 * @param {string} s
 * @return {string}
 */
// 方法一：用时 68ms
// 执行用时超过了 91%
// 消耗内存超过了 0%
// 难度: 中等
var smallestSubsequence = function(s) {
  let smap = new Array(26).fill(0) // 在栈中是否出现
  let scnt = {} // 在字符串中出现几次
  for (let i = 0; i < s.length; i++) {
    scnt[s[i]] = scnt[s[i]] ? (scnt[s[i]] + 1) : 1
  }
  let monostack = [] // 单调栈
  // console.log('scnt: ', JSON.stringify(scnt))
  // console.log('s: ', s)
  for (let i = 0; i < s.length; i++) {
    // console.log(`[${i}, ${s[i]}] scnt=${JSON.stringify(scnt)} smap=${JSON.stringify(smap)}`)
    if (!smap[s[i].charCodeAt() - 'a'.charCodeAt()]) {
      while (monostack.length && monostack[monostack.length - 1] > s[i]) {
        if (scnt[monostack[monostack.length - 1]] <= 0) {
          break
        }
        smap[monostack[monostack.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0
        monostack.pop()
      }
      smap[s[i].charCodeAt() - 'a'.charCodeAt()] = 1
      monostack.push(s[i])
    }
    scnt[s[i]] --
    // console.log('monostack: ', JSON.stringify(monostack), JSON.stringify(smap))
  }
  return monostack.join('')
};

console.log(removeDuplicateLetters('bcabc'))
console.log(removeDuplicateLetters('cbacdcbc'))
