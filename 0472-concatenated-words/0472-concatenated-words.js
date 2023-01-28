/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let dict = new Set(words);
    const DFS = (word) => {
        if (dict.has(word)) return true;
        for (let i = 0; i < word.length; i++) {
            let prefix = word.slice(0, i + 1);
            if (dict.has(prefix)) {
                let suffix = word.slice(i + 1);
                let result = DFS(suffix);
                if (result) {
                    dict.add(word);
                    return true;
                }
            }
        }
        return false;
    }
    let answer = [];
    for (word of words) {
        dict.delete(word);
        if (DFS(word)) {
            answer.push(word);
        };
        dict.add(word);
    }
    return answer;
};