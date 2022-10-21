/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let memo = {};
    const DFS = (diceRolled, diff) => {
        if (diff === 0 && diceRolled === n) {
            return 1;
        }
        if (diceRolled === n || diff <= 0) {
            return 0;
        }
         if ( memo[`${diceRolled}-${diff}`] !== undefined) {
            return  memo[`${diceRolled}-${diff}`];
        }
        let result = 0, M = Math.pow(10, 9) + 7;
        for (let i = 1; i <= k; i++) {
            result = (result + DFS(diceRolled + 1, diff - i)) % M;
        }
        memo[`${diceRolled}-${diff}`] = result;
        return result;
    }
    return DFS(0, target);
};