/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    /*
        map emails by accounts idx 
        - key: value -> email: [idx1, idx2, ...]
        - create adj list
        - DFS through adjList keeping track of visited idxs, and merge the accounts
    */

    const emailMap = {};

    for (let i = 0; i < accounts.length; i++) {
        let [name, ...emails] = accounts[i];
        emails.forEach(email => {
            if (!emailMap[email]) emailMap[email] = [];
            emailMap[email].push(i);
        });
    }

    const parents = new Array(accounts.length).fill(0).map((_, idx) => idx);

    function find(node) {
        if (node !== parents[node]) {
            parents[node] = find(parents[node]);
        }
        return parents[node];
    }

    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);
        if (p1 !== p2) {
            if (p1 < p2) parents[p2] = p1
            else parents[p1] = p2;
        }
    }

    for (let email in emailMap) {
        let nodes = emailMap[email];
        for (let i = 1; i < nodes.length; i++) {
            union(nodes[0], nodes[i]);
        }
    }

    for (let i = 0; i < parents.length; i++) {
        find(i);
    }

    const container = Array.from({length: accounts.length}, () => new Set());
    for (let i = 0; i < parents.length; i++) {
        let account = accounts[i];
        let mergeAccount = container[parents[i]];
        account.forEach(email => mergeAccount.add(email));
    }
    let answer = container.map(acc => Array.from(acc)).filter(acc => acc.length);
    answer.forEach(acc => {
        let name = acc.shift();
        acc.sort();
        acc.unshift(name);
    })
    return answer;
};