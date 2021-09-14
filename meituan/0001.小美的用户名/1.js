const fs = require('fs')

let strs = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/)
for (let i = 1; i < strs.length; i++) {
    console.log(checkUser(strs[i]))
}

// 方法一：用时 ms
// 执行用时超过了 %
// 消耗内存超过了 %
function checkUser (s) {
  let num_falg = false
  let s_flag = false
  let c = s.charAt(0)
  if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))) {
    return 'Wrong'
  }
  for (let i = 1; i < s.length; i++) {
    let c = s.charAt(i)
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      s_flag = true
    }
    if (c >=0 && c <=9) {
      num_falg = true
    }
  }
  return (s_flag && num_falg) ? 'Accept' : 'Wrong'
}

console.log(checkUser('5'))
console.log(checkUser('Ooook'))
console.log(checkUser('Hhhh666'))
console.log(checkUser('ABCD'))
console.log(checkUser('Meituan'))
console.log(checkUser('6666'))
