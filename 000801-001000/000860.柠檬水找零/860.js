/**
 * @param {number[]} bills
 * @return {boolean}
 */
 // 方法一：用时 84ms
 // 执行用时超过了 79%
 // 消耗内存超过了 65%
var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five ++
    } else if (bills[i] === 10) {
      ten ++
      if (five === 0) {
        return false
      }
      five --
    } else {
      if (five > 0 && ten > 0) {
        five --
        ten --
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
};

console.log(lemonadeChange([5, 5, 5, 10, 20]))
