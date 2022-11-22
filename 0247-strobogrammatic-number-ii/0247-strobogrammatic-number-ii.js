/**
 * @param {number} n
 * @return {string[]}
 */
const map = {
    0: [''],
    1: ['0', '1', '8']
}
var findStrobogrammatic = function(n) {
 // var list = helper(n - 2, m);
    if (n === 1) return map[1];
    for (let j = 2; j <= n; j++) {
        let list = map[j - 2];
        let res = [];
        for (var i = 0; i < list.length; i++) {
            var s = list[i];

            if (j !== n) res.push("0" + s + "0");        
            res.push("1" + s + "1");
            res.push("6" + s + "9");
            res.push("8" + s + "8");
            res.push("9" + s + "6");
        }
        map[j] = res;
    }
    return map[n];
};
