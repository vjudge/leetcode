from typing import List

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