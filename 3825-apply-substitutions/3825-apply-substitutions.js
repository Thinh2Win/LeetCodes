/**
 * @param {string[][]} replacements
 * @param {string} text
 * @return {string}
 */
var applySubstitutions = function(replacements, text) {
    let map = {'_': '_'};
    // fill map
    for (let [char, code] of replacements) {
        map[char] = code;
    };
    // connect replacements 
    for (let [char, code] of replacements) {
        let newCode = formCode(code, map);
        map[char] = newCode;
    };
    let answer = [];
    for (let char of text) {
        if (char === '%') continue;
        answer.push(map[char]);

    }
    return answer.join('');
};

function formCode(replacement, map) {
    let check = replacement.split('%');
    if (check.length <= 1) return replacement;
    let newCode = [];
    for (let i = 0; i < check.length; i++) {
        if (!check[i].length) continue;
        if (map[check[i]]) {
            newCode.push(formCode(map[check[i]], map));
        } else {
            newCode.push(check[i]);
        }
    }
    return newCode.join('');
}