/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    /*
        BFS 
        - sort folders by length, ensuring we start with potential sub folders
        - filter folders if they are subfolders 
        - push start folder into answer array  
        - set filtered as next round 
        - return answer array at end of BFS
    */
    folder.sort();
    const answer = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        if (!isSubstring(answer.at(-1), folder[i])) answer.push(folder[i]);
    }
    return answer;
};

function isSubstring(s1, s2) {
    let t1 = s1.split('/');
    let t2 = s2.split('/');
    for (let i = 0; i < t1.length; i++) {
        if (t1[i] !== t2[i]) return false;
    }
    return true;
}