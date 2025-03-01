class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        frequency = {}
        for num in arr:
            frequency[num] = frequency.get(num, 0) + 1
        check = []
        for key in frequency:
            if frequency[key] in check:
                return False
            check.append(frequency[key])
        return True