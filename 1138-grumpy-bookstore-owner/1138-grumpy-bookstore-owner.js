/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    /*
        sliding window? 
        window length = minutes 
        shrink window if it goes over 
        track how many satisfied customers are inside window
        as we shrink window, if owner is not grumpy we can add that value to total 
    */
    if (!customers.length) return 0;
    if (minutes === 1) return handleOne(customers, grumpy, minutes);

    let answer = 0;
    let L = 0;
    let windowTotal = 0;
    let primeTime = [0, 0, 0]; // [total customers, start idx, end idx]

    for (let R = 0; R < customers.length; R++) {
        let num = customers[R];
        if (grumpy[R] == 1) windowTotal += num;
        if (R - L + 1 > minutes) {
            let numL = customers[L];
            if (grumpy[L] === 1)  windowTotal -= numL;
            L += 1;
        }
        if (windowTotal > primeTime[0]) {
            primeTime[0] = windowTotal;
            primeTime[1] = L;
            primeTime[2] = R;
        }
    }
    let start = primeTime[1];
    let end = primeTime[2] + 1;
    answer += customers.slice(start, end).reduce((acc, num) => acc += num, 0);
    for (let i = start - 1; i >= 0; i--) {
        if (grumpy[i] === 0) answer += customers[i];
    }
    for (let j = end; j < customers.length; j++) {
        if (grumpy[j] === 0) answer += customers[j];
    }
    return answer;
};

function handleOne(customers, grumpy, minutes) {
    let maxQ = new MaxPriorityQueue();
    let count = 0;
    for (let i = 0; i < customers.length; i++) {
        let num = customers[i];
        if (grumpy[i] === 0) {
            count += num;
        } else {
            // owner grumpy, track highest customers
            maxQ.enqueue(num);
        }
    }
    let lostCustomers = maxQ.dequeue() || 0;
    return count + lostCustomers;
}