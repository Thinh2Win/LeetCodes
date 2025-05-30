/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    /*
        start from each node and traverse through graph 
        keep track of visited to avoid revisiting nodes 
        compare paths of node1 and node2 
        the first number that is the same is going to be our answer 
    */

    let dist1 = getDist(edges, node1);
    let dist2 = getDist(edges, node2);
    
    let answer = -1;
    let min = Infinity;

    for (let i = 0; i < dist1.length; i++) {
        if (dist1[i] !== -1 && dist2[i] !== -1) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < min) {
                min = maxDist;
                answer = i;
            }
        }
    }
    return answer;
};

function getDist (edges, node) {
    const dist = new Array(edges.length).fill(-1);
    let curr = node;
    let d = 0;
    while (curr !== -1 && dist[curr] === -1) {
        dist[curr] = d;
        curr = edges[curr];
        d += 1;
    }
    return dist;
}