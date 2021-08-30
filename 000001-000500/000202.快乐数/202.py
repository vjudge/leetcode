class Solution:
    def isHappy(self, n: int) -> bool:
        hfactors = set()
        while (n != 1):
            sum = 0
            while (n):
                sum += (n % 10) * (n % 10)
                n = int(n / 10)
            n = sum
            if n in hfactors:
                break
            hfactors.add(n)
        return n == 1


s = Solution()
print(s.isHappy(9))
print(s.isHappy(19))
print(s.isHappy(2))