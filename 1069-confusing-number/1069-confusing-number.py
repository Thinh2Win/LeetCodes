class Solution:
    def confusingNumber(self, n: int) -> bool:
        # if a number contains 2, 3, 4, 5, 7 we can just return false
        # check if number ends in 0's (leading) or contains 6 or 9, if so we can return true 
        # return if number and its reverse are equal 
        invalid = {'2', '3', '4', '5', '7'}
        test = ''
        for num in str(n):
            if (num in invalid): return False
            if num == '6': test += '9'
            elif num == '9': test += '6'
            else: test += num
        return test[::-1] != str(n)