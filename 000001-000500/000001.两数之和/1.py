from typing import List

# 方法一：用时28ms
# 执行用时超过了 97%
# 消耗内存超过了 45%
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ndist = dict()
        for i in range(len(nums)):
            ndiv = target - nums[i]
            if ndiv in ndist:
                return [ndist[ndiv], i]
            else:
                ndist[nums[i]] = i

sol = Solution()
print(sol.twoSum([2, 7, 11, 15], 9))
print(sol.twoSum([3, 3], 6))
print(sol.twoSum([0, 4, 3, 0], 0))
print(sol.twoSum([-3, 4, 3, 90], 0))
