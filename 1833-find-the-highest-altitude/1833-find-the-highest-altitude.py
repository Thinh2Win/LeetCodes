class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        start, maxAltitude = 0, 0
        # add the altitude gained and track max
        for num in gain:
            start += num
            maxAltitude = max(maxAltitude, start)
        return maxAltitude