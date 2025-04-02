/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    /*
        track all plates to the left of a candle 
        track idxs of candles in an array 
        to find plates for a query, [startIdx, endIdx] 
        if startIdx isn't already a candle we find the closest right candle 
        same with endIdx except were finding closest left candle 
        number of plates = plates at right candle - plates at left candle 
        ex. * * | * * | * * * |
            leftPlates = [0 0 2 0 0 4 0 0 0 7] and candles = [2, 5, 9] 
            queries = [2, 5] [5, 9]
            since idx 2 and 5 are already candles, we do leftPlates[5] - leftPlates[2] = 4 - 2 = 2 plates 
            5,9 would give us 7 - 4 = 3 plates 
        ex2. * * * | * * | * * * * * | * * | | * * | *
            left = [0 0 0 3 0 0 5 0 0 0 0 0 10 0 0 12 12 0 0 14 0] candles = [3,6,12,15,16,19]
            queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
            - 1, 17 we get candles 3 and 16 -> 12 - 3 = 9
            - 4, 5 would give 6, 3 -> 3 - 5 = -2, if we get a negative we can just return 0 
            - 14, 17 -> 15, 16 -> 12 - 12 = 0
    */

    const leftPlates = [];
    const candles = [];
    let plates = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '|') {
            candles.push(i);
            leftPlates.push(plates);
        } else {
            // its a *
            plates += 1;
            leftPlates.push(0);
        }
    }
    let answer = [];
    for (let [sIdx, eIdx] of queries) {
        let leftCandle = rbSearch(sIdx, candles);
        let rightCandle = lbSearch(eIdx, candles);
        if (leftCandle === null || rightCandle === null) {
            answer.push(0);
            continue;
        }
        let diff = leftPlates[rightCandle] - leftPlates[leftCandle];
        diff <= 0 ? answer.push(0) : answer.push(diff);
    }
    return answer;
};

function lbSearch(target, candles) {
    let L = 0;
    let R = candles.length;
    let answer = null;

    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);
        if (candles[mp] <= target) {
            answer = candles[mp];
            L = mp + 1;
        } else {
            R = mp - 1;
        }
    }
    return answer;
}

function rbSearch(target, candles) {
    let L = 0;
    let R = candles.length;
    let answer = null;

    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);
        if (candles[mp] >= target) {
            answer = candles[mp];
            R = mp - 1;
        } else {
            L = mp + 1;
        }
    }
    return answer;
}