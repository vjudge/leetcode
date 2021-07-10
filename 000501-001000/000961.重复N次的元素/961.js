/**
 * @param {number[]} A
 * @return {number}
 */
// 战胜68.05%
var repeatedNTimes = function(A) {
    if (!A || !A.length) {
        return null
    }
    let total = A.length / 2
    let result = null
    let nums = {}
    for (let i = 0; i < A.length; i++) {
        if (!nums[A[i]]) {
            nums[A[i]] = 1
        } else {
            nums[A[i]] ++
        }
        if (nums[A[i]] === total) {
            result = A[i]
            break
        }
    }
    return result
};

console.log(repeatedNTimes([1,2,3,3]))
console.log(repeatedNTimes([2,1,2,5,3,2]))
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))
