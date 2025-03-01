/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    // first we find longest common subsequence of 2 strings 
    // LCS will help determine how to combine our strings to get supersequence 
    let lcs = findLCS(str1, str2);
    // once we have LCS, we use 2 pointers to track letters of str1 and str2 
    // both pointers will start at idx 0 
    // we move both pointers until they reach the first letter of the LCS, 
    // for each letter of the strings we pass we keep track of and append to our answer string 
    // once both pointers are at the first LCS letter, we append that letter to answer string too 
    // do this for all letters in LCS 
    let answer = [];
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < lcs.length; i++) {
        let str1Letters = [];
        let str2Letters = [];
        while (str1[p1] !== lcs[i]) {
            str1Letters.push(str1[p1]);
            p1 += 1;
        }
        while (str2[p2] !== lcs[i]) {
            str2Letters.push(str2[p2]);
            p2 += 1;
        }
        str2Letters.push(lcs[i]);
        p1 += 1;
        p2 += 1;
        answer.push(...str1Letters, ...str2Letters);
    }
    // push in remainder if any 
    answer.push(...str1.slice(p1, str1.length), ...str2.slice(p2, str2.length))
    return answer.join('');
};

function findLCS(str1, str2) {
    let dp = Array.from({length: str1.length}, () => new Array(str2.length).fill(0));
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                let diagonal = dp?.[i - 1]?.[j - 1] || '';
                dp[i][j] = diagonal + str1[i];
            } else {
                let up = dp?.[i - 1]?.[j] || '';
                let left = dp?.[i]?.[j - 1] || '';
                let longest = up.length > left.length ? up : left;
                dp[i][j] = longest;
            }
        }
    }
    return dp.at(-1).at(-1);
}