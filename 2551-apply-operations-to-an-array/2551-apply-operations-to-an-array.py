class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for idx in range(len(nums) - 1):
            if nums[idx] == nums[idx + 1]:
                nums[idx] = nums[idx] * 2
                nums[idx + 1] = 0
        p1 = 0
        for p2, num in enumerate(nums):
            if num != 0:
                nums[p2], nums[p1] = nums[p1], nums[p2]
                p1 += 1
        return nums