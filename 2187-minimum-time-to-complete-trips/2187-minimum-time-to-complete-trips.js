/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 0;
    let high = Number.MAX_SAFE_INTEGER;
    while (low <= high) {
        let mp = Math.floor((high - low) / 2) + low;
        let trips = 0;
        for (let i = 0; i < time.length; i++) {
            trips += Math.floor(mp / time[i]);
        }
        if (trips < totalTrips) {
            low = mp + 1;
        } else if (trips >= totalTrips) {
            high = mp - 1;
        }
    }
    return low;
};