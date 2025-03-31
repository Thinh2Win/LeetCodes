/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

class Trie {
    constructor() {
        this.trie = {};

        this.addWord = (word) => {
            let currTrie = this.trie;
            for (let char of word) {
                currTrie[char] ? currTrie[char].words.push(word) : currTrie[char] = {words: [word]};
                currTrie = currTrie[char]; 
            }
        }
    }

}

var suggestedProducts = function(products, searchWord) {
    const trie = new Trie();
    products.sort();

    products.forEach(word => {
        trie.addWord(word);
    });

    const res = [];
    let root = trie.trie;
    for (let i=0;i<searchWord.length;i++) {
        if (root) root = root[searchWord[i]];
        res.push(!root ? [] : root['words'].slice(0, 3));
    }
    return res;
};