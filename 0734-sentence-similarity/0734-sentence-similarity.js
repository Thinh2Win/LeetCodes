/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;
    let map = {};
    for (let j = 0; j < sentence1.length; j++) {
        let word1 = sentence1[j];
        let word2 = sentence2[j];
        map[word1] = {[word1]: 1};
        map[word2] = {[word2]: 1};
    }
    similarPairs.forEach(pair => {
       let [w1, w2] = pair;
        map[w1] ? map[w1][w2] = 1 : map[w1] = {[w2] : 1};
        map[w2] ? map[w2][w1] = 1 : map[w2] = {[w1]: 1};
    });
    for (let i = 0; i < sentence1.length; i++) {
        let word1 = sentence1[i];
        let word2 = sentence2[i];
        if (map[word2][word1] === undefined) {
            return false;
        }
    }  
    return true;
};