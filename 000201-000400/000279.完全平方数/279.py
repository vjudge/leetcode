import math

# 难度: 中等
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [x for x in range(0, n+1)]
        for i in range(1, n+1):
            for j in range(0, int(math.sqrt(i))+1):
                dp[i] = min(dp[i], dp[i - j ** 2] + 1)
        return dp[n]


s = Solution()
print(s.numSquares(12))
