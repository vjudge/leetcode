/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 方法一：用时 240ms
// 执行用时超过了 75%
// 消耗内存超过了 24%
// 难度: 中等
var dailyTemperatures = function(temperatures) {
  let monostacks = []
  let result = new Array(temperatures.length).fill(0)
  // console.log(JSON.stringify(temperatures))
  temperatures.forEach((num, i) => {
    while (monostacks.length && temperatures[monostacks[monostacks.length - 1]] < num) {
      let top = monostacks.pop()
      // console.log(JSON.stringify({ i, top, iii: temperatures[i] }))
      result[top] = i - top
    }
    monostacks.push(i)
  })
  return result
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))
