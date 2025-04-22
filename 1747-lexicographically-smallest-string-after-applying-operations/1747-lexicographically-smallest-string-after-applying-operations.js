/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    /*
        use a min heap

    */
    const minQ = new MinPriorityQueue();
    minQ.enqueue(s);
    let min = s;
    let visited = new Set();
    while (minQ.size()) {
        let string = minQ.dequeue();
        min = min < string ? min : string;
        visited.add(string);
        let opA = applyA(string, a);
        let opB = applyB(string, b);
        if (!visited.has(opA)) minQ.enqueue(opA);
        if (!visited.has(opB)) minQ.enqueue(opB);
    }
    return min;
};  

function applyA(string, a) {
    let copy = string.split('');
    for (let i = 1; i < copy.length; i += 2) {
        let num = (+copy[i] + a) % 10;
        copy[i] = `${num}`;
    }
    return copy.join('');
}

function applyB(string, b) {
    return string.slice(b) + string.slice(0, b);
}