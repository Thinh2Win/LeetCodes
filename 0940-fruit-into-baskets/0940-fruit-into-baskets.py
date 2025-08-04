class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        L = 0
        maxFruit = 0
        types = {}

        for R in range(0, len(fruits)):
            types[fruits[R]] = types.get(fruits[R], 0) + 1
            while len(types) > 2:
                types[fruits[L]] = types.get(fruits[L], 0) - 1
                if (types.get(fruits[L]) == 0): types.pop(fruits[L], None)
                L += 1
            maxFruit = max(maxFruit, R - L + 1)
        
        return maxFruit