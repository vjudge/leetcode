/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 方法一：用时 124ms
// 执行用时超过了 61%
// 消耗内存超过了 35%
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false
  }
  let cnt1 = new Array(26).fill(0)
  let cnt2 = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    cnt1[s1[i].charCodeAt()-'a'.charCodeAt()] ++
    cnt2[s2[i].charCodeAt()-'a'.charCodeAt()] ++
  }
  if (cnt1.toString() == cnt2.toString()) {
    return true
  }
  for (let i = s1.length; i < s2.length; i++) {
    cnt2[s2[i].charCodeAt()-'a'.charCodeAt()] ++
    cnt2[s2[i - s1.length].charCodeAt()-'a'.charCodeAt()] --
    if (cnt1.toString() == cnt2.toString()) {
      return true
    }
  }
  return false
};

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))
