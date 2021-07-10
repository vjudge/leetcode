/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 战胜69、33%
var intersect = function(nums1, nums2) {
    if (!nums1 || nums1.length === 0 || !nums2 || nums2.length === 0) {
        return []
    }
    let baseNums = {}
    for (let i = 0; i < nums1.length; i++) {
        baseNums[nums1[i]] = baseNums[nums1[i]] ? ++baseNums[nums1[i]] : 1
    }
    let result = []
    for (let i = 0; i < nums2.length; i++) {
        if (baseNums[nums2[i]]) {
            result.push(nums2[i])
            baseNums[nums2[i]] --
        }
    }
    return result
};

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))
