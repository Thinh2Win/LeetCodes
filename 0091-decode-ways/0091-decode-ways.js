/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
   if (s.length < 1) return 0;
    let memo = [];
    var recur = function (index) {
        let result = 0
        if (index == s.length) return 1; // base case 1: reach the end = correct path
        if (memo[index]!=null) return memo[index]; // base case 2: if we already have the information on this index, return it
        if (s[index] > 0) { // as long as its bigger than 0, we can at least  use it as a single digit
            result += recur(index+1); // move forward by 1
        }
		
		// as long as 1. we are not starting with 0 etc. `04`
		//            2. our next digit isn't null
		//            3. we can form a two digit number thats smaller than 27
        if (s[index] != 0 && s[index+1] != null && s[index]+s[index+1] < 27) {
			// lets make this two digit together and move forward by 2
            result += recur(index+2);
        }
        memo[index] = result; // given the current index, store how many different ways we can decode
        return result;
    }
    return recur(0);
};