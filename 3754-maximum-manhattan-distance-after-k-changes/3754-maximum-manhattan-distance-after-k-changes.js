/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let north = 0, east = 0, south = 0, west = 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === 'N') north += 1;
        if (char === 'E') east += 1;
        if (char === 'S') south += 1;
        if (char === 'W') west += 1;

        let MD = Math.abs(north - south) + Math.abs(east - west);
        let dist = MD + Math.min(2 * k, i + 1 - MD);
        answer = Math.max(answer, dist);
    }
    return answer;
};