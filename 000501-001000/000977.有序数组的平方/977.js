/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    console.log(`init nums: `, JSON.stringify(nums))
    if (nums.length === 0) { return nums }
    if (nums.length === 1) {
        nums[0] = nums[0] * nums[0]
        return nums
    }
    if (nums[0] >= 0) {
        return sortedPlusSquares(nums)
    }
    if (nums[nums.length - 1] <= 0) {
        return sortedMinusSquares(nums)
    }
    return sortedMixSquares(nums)
};

function sortedPlusSquares (nums) {
    for (let i = 0; i < nums.length; i ++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums
}

function sortedMinusSquares (nums) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let tmp = nums[end] * nums[end]
        nums[end] = nums[start] * nums[start]
        nums[start] = tmp
        end --
        start ++
    }
    return nums
}

function sortedMixSquares (nums) {
    let start = 0
    let end = nums.length - 1
    let result = []
    let index = end
    while (start <= end) {
        let startSq = nums[start] * nums[start]
        let endSq = nums[end] * nums[end]
        // console.log(`nums: `, JSON.stringify(nums))
        // console.log(`start=${start} nums[start]=${nums[start]} startSq=${startSq}`)
        // console.log(`end=${end} nums[end]=${nums[end]} endSq=${endSq}`)
        if (endSq > startSq) {
            result[index] = endSq
            end --
        } else if (endSq < startSq) {
          result[index] = startSq
          start ++
        } else {
            result[index] = endSq
            if (start != end) {
                index --
                result[index] = startSq
                start ++
            }
            end --
        }
        index --
    }
    return result
}


console.log(`result: `, sortedSquares([-4,-1,0,3,10]))
console.log(`result: `, sortedSquares([-7,-3,2,3,11]))
console.log(`result: `, sortedSquares([-10,-1,0,3,6]))
console.log(`result: `, sortedSquares([-7,-3,2,3,11]))
console.log(`result: `, sortedSquares([0, 3, 5, 6, 9]))
console.log(`result: `, sortedSquares([-5, -3, -2, -1, 0]))
console.log(`result: `, sortedSquares([-10000,-9999,-7,-5,0,0,10000]))



