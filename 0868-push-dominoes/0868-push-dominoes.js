/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const forces = new Array(n).fill(0);

    let forceR = 0;
    for (let i = 0; i < n; i++) {
        let char = dominoes[i];
        if (char === 'R') forceR = n;
        else if (char === 'L') forceR = 0;
        else forceR = Math.max(forceR - 1, 0);
        forces[i] += forceR;
    }

    let forceL = 0;
    for (let j = n - 1; j >= 0; j--) {
        let char = dominoes[j];
        if (char === 'L') forceL = n;
        else if (char === 'R') forceL = 0;
        else forceL = Math.max(forceL - 1, 0);
        forces[j] -= forceL;
    }

    return forces.map(f => f > 0 ? 'R' : f < 0 ? 'L' : '.').join('');
};