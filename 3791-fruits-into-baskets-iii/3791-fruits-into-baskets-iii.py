class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        n = len(baskets)
        N = 1
        while N < n: N *= 2
        segTree = [0] * (N * 2)
        
        for idx, basket in enumerate(baskets):
            segTree[N + idx] = basket
        
        for i in range(N - 1, 0, -1): 
            segTree[i] = max(segTree[i * 2], segTree[i * 2 + 1])
        
        count = 0
        for fruit in fruits:
            idx = 1
            if fruit > segTree[idx]: 
                count += 1
                continue
            while idx < N:
                if fruit <= segTree[idx * 2]: idx *= 2
                else: idx = idx * 2 + 1
            segTree[idx] = -1
            while idx != 1:
                idx = math.floor(idx / 2)
                segTree[idx] = max(segTree[idx * 2], segTree[idx * 2 + 1])
        
        return count