/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let nmap = {}
    for (let i = 0; i < nums.length; i ++) {
        if (nmap[nums[i]]) {
            return true
        } else {
            nmap[nums[i]] = true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))