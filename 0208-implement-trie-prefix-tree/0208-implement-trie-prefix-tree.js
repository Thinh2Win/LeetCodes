
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this.trie;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!root[char]) root[char] = {isWord: false};
        if (i === word.length - 1) root[char].isWord = true;
        root = root[char];
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let root = this.trie;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!root[char]) return false;
        if (i === word.length - 1) return root[char].isWord;
        root = root[char];
    }
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this.trie;
    for (let char of prefix) {
        if (!root[char]) return false;
        root = root[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */