class MovingAverage:

    def __init__(self, size: int):
        self.total = 0
        self.maxLength = size
        self.window = []

    def next(self, val: int) -> float:
        self.total += val
        self.window.append(val)
        if len(self.window) > self.maxLength:
            self.total -= self.window.pop(0)
        return self.total / len(self.window)



# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)