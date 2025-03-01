class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        frequency = {}
        for num in arr:
            frequency[num] = frequency.get(num, 0) + 1
        check = set(frequency.values())
        return len(check) == len(frequency)