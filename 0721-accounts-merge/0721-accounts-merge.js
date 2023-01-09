/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let map = {};
    let adjList = new Array(accounts.length).fill(0).map(zero => []);
    let seen = {};
    let answer = [];
    accounts.forEach((account, idx) => {
        for (let i = 1; i < account.length; i++) {
            let email = account[i];
             if (map[email] === undefined) {
                map[email] = idx;
            } else {
                let connectedIdx = map[email];
                adjList[connectedIdx].push(idx);
                adjList[idx].push(connectedIdx);
            }
        }
    });
    const DFS = (idx, set) => {
        accounts[idx].forEach(val => set.add(val));
        seen[idx] = true;
        for (let k = 0; k < adjList[idx].length; k++) {
            if (seen[adjList[idx][k]]) continue;
            DFS(adjList[idx][k], set);
        }
        return set;
    }
    for (let j = 0; j < adjList.length; j++) {
        if (seen[j]) continue;
        if (adjList[j].length === 0) {
            answer.push(accounts[j].sort());
        } else {
            let mergedAccount = [...DFS(j, new Set())];
            let name = mergedAccount.shift();
            mergedAccount.sort();
            mergedAccount.unshift(name);
            answer.push(mergedAccount);
        }
    }
    return answer;
};