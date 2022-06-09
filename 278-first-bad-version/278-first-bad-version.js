/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let min = 1; 
        let max = n;
        let answer = null;
        let start = Math.floor(n / 2);
    const loop = (start) => {
        console.log(start)
        if (isBadVersion(start) === false) {
            if (isBadVersion(start + 1) === true ) {
                return answer = start + 1;
            }
            min = start;
            start = Math.floor((max + min) / 2);
            loop(start);
        } 
        if (isBadVersion(start) === true) {
            if (isBadVersion(start - 1) === false) {
                return answer = start;
            }
            max = start;
            start = Math.floor((max + min) / 2);
            loop(start);
        } 
        
    } 
    loop (start) 
    return answer;
    };
};