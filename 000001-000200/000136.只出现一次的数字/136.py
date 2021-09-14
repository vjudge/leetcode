from typing import List

# 方法一：用时 44ms
# 执行用时超过了 61%
# 消耗内存超过了 71%
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for i in range(0, len(nums)):
            result ^= nums[i]
        return result


s = Solution()

print(s.singleNumber([2, 2, 1]))
print(s.singleNumber([4, 1, 2, 1, 2]))
print(s.singleNumber([6, 6, 3, 3, 2, 2, 0]))
