/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
 let total = 0;
    sticks.sort((a,b)=>a-b);
    while ((sticks.length>1)) {    
        let connect = sticks.shift() + sticks.shift()
        for (let i=0;i<=sticks.length;i++) {
            if (i==sticks.length || sticks[i] > connect) {
                sticks.splice(i, 0, connect);
                break;
            }
        }
        total+=connect;
    }
    return total;
};