/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    words.forEach(word => map[word] ? map[word] += 1 : map[word] = 1);
    let mostFrequent = Object.keys(map).sort((a, b) => {
        let count = map[b] - map[a];
        if (count === 0) {
            return a.localeCompare(b)
        } else {
            return count;
        }
        
    }); 
    return mostFrequent.slice(0, k);
}; 
