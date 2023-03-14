/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let answer = [];
    let adjList = new Array(accounts.length).fill(0).map(zero => []);
    let map = {};
    accounts.forEach((account, idx) => {
        for (let i = 1; i < account.length; i++) {
            let email = account[i];
            if (map[email] !== undefined) {
                let mergeIdx = map[email];
                adjList[mergeIdx].push(idx);
                adjList[idx].push(mergeIdx);
            } else {
                map[email] = idx;
            }
        }
    });
    let seen = {};
    const DFS = (idx, set) => {
        if (seen[idx]) return;
        accounts[idx].forEach(email => {
            set.add(email);
        });
        seen[idx] = true;
        for (let i = 0; i < adjList[idx].length; i++) {
            if (seen[adjList[idx][i]]) continue;
            DFS(adjList[idx][i], set);
        }
        return set;
    };
    for (let i = 0; i < adjList.length; i++) {
        if (seen[i]) continue;
        if (adjList[i].length === 0) {
            accounts[i].sort();
            answer.push(accounts[i]);
        } else {
            let merged = [...DFS(i, new Set())];
            let name = merged.shift();
            merged.sort();
            merged.unshift(name);
            answer.push(merged);
        }
    }
    return answer;
};