class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        right = sum(nums)
        left = 0
        for idx, num in enumerate(nums):
            right -= num
            if left == right:
                return idx
            left += num
        return -1