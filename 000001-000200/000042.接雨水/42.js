/**
 * @param {number[]} height
 * @return {number}
 */
//方法一：用时 76ms
// 执行用时超过了 79%
// 消耗内存超过了 35%
// 难度: 困难
var trap = function(height) {
  let monostacks = []
  let result = 0
  height.forEach((num, i) => {
    // console.log(`num[i]: [${i}, ${num}]: stack=${JSON.stringify(monostacks.map((i)=>(height[i])))} ${JSON.stringify(monostacks)}`)
    while (monostacks.length && height[monostacks[monostacks.length - 1]] < num) {
      let top = monostacks.pop()
      if (!monostacks.length) {
        break
      }
      let left = monostacks[monostacks.length - 1]
      let w = i - left - 1
      let h = Math.min(height[left], height[i]) - height[top]
      // console.log(`num=${num} [${height[left]}, ${height[top]}] ${w} * ${h} = ${w * h}`)
      result += (w * h)
    }
    monostacks.push(i)
  })
  return result
};

console.log(trap([0, 7, 1, 4, 6]))
// console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]))
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(trap([4, 2, 0, 3, 2, 5]))
