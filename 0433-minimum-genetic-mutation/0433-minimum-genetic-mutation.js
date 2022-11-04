/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

const isOneOff = (gene1, gene2) => {
    let diff = 0;
    for (let i = 0; i < gene1.length; i++) {
        if (gene1[i] !== gene2[i]) {
            diff += 1;
        }
    }
    return diff > 1 ? false : true;
}

var minMutation = function(start, end, bank) {
    let min = Infinity;
    if (!bank.includes(end)) return -1;
    const DFS = (currentGene, remaining, lvl) => {
    if (isOneOff(currentGene, start)) {
        min = Math.min(min, lvl);
        return;
    }

    for (let i = 0; i < remaining.length; i++) {
        if (isOneOff(currentGene, remaining[i])) {
            DFS(remaining[i], remaining.filter(gene => gene !== remaining[i]), lvl + 1);
        }
    }
}
    DFS(end, bank.filter(gene => gene !== end), 1);
    return min === Infinity ? -1 : min;
};