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
        let L = 0;
        let R = n;
        while (L < R) {
            let mp = Math.floor((R - L) / 2) + L;
            if (isBadVersion(mp)) {
                R = mp;
            } else if (!isBadVersion(mp)) {
                L = mp + 1;
            }
        }
        return R;
    };
};