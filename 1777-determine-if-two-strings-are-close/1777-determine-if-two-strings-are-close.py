from collections import Counter

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        # if length of word1 != to length of word2 return false
        if len(word1) != len(word2): 
            return False
        freq1 = Counter(word1)
        freq2 = Counter(word2)        
        # if the frequency of letters in word1 is the same as the frequency of letters of word2
        # we can return true since we can swap and change the letters 
        # but both must have the same letters too 
        sameFreq = sorted(freq1.values()) == sorted(freq2.values())
        sameLetters = set(freq1.keys()) == set(freq2.keys())
        
        # ex. word1 {a: 2, b: 3, d, 1} and word2 {a: 1, b: 2, d: 3} this is valid since we can swap freq of d -> b and then b -> a
        # so as long as the frequencies are the same and they have the same letters we can return true 
        if sameFreq and sameLetters:
            return True
        return False