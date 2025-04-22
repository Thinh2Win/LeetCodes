/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let answer = new Set();
    if (!firstList.length || !secondList.length) return [];
    for (let [x1, y1] of firstList) {
        for (let [x2, y2] of secondList) {
            if (x1 <= x2 && y1 >= x2) answer.add(JSON.stringify([Math.max(x1, x2), Math.min(y1, y2)]));
            if (x2 <= x1 && y2 >= x1) answer.add(JSON.stringify([Math.max(x1, x2), Math.min(y1, y2)]));
        }
    }
    return Array.from(answer).map(arr => JSON.parse(arr));
};