/**
 * @param {number[][]} costs
 * @return {number}
 */
// 方法一：用时 68 ms
// 执行用时超过了 75 %
// 消耗内存超过了 87 %
// 难度: 中等
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => {
        return b[1] - b[0] - (a[1] - a[0])
    })
    let ret = 0
    let n = costs.length / 2
    for (const i in costs) {
        if (i < n) {
            ret += costs[i][0]
        } else {
            ret += costs[i][1]
        }
    }
    return ret
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))
console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]))
console.log(twoCitySchedCost([[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]))


