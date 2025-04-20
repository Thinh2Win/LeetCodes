/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    /*
        when we have a duplicate count, we dont have to add to a count 
        ex. [1,1,2] 
        1 rabbit says 1 other has same color 
        the next 1 is a duplicate so we dont have to count it 
        3rd rabbit says 2 this time so we add 3 
        ex.2 [10,10,10]
            since all 3 rabbits say 10 we can just add the num + 1 = 11 
    */
    let count = 0;
    let history = {}

    for (let num of answers) {
        if (num === 0) {
            count += 1;
            continue
        }
        if (!history[num]) {
            count += num + 1;
        }
        history[num] = (history[num] || 0) + 1; 
        if (history[num] > num + 1) {
            count += num + 1;
            history[num] = 1;
        }
    }

    return count;
};