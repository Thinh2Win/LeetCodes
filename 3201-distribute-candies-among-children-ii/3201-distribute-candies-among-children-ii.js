/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    const getComb = (sum) => {
        if (sum < 0) return 0;
        return ((sum + 2) * (sum + 1)) / 2;
    }

    return ( // binomial coefficient of 3 kids is 1 3 3 1
        getComb(n) // 1
        - 3 * getComb(n - (limit + 1)) // 3
        + 3 * getComb(n - 2 * (limit + 1)) // 3
        - getComb(n - 3 * (limit + 1)) // 1
    )
};