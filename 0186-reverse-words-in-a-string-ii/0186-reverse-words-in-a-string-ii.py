class Solution:
    def reverseWords(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s.reverse()
        start = 0
        s.append(' ')
        for i in range(0, len(s)):
            if s[i] == ' ':
                end = i - 1
                while start < end:
                    s[start], s[end] = s[end], s[start]
                    start += 1
                    end -= 1
                start = i + 1
        s.pop()    