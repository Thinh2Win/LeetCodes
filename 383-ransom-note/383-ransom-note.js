/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map1 = {} 
    let map2 = {} 
    ransomNote.split('').forEach(character => {
       if (!map1[character]) {
           map1[character] = 1;
       } else {
           map1[character] += 1;
       }
    });
    magazine.split('').forEach(character => {
       if (!map2[character]) {
           map2[character] = 1;
       } else {
           map2[character] += 1;
       }
    });    
    let answer = true;
    for (keys in map1) {
        if (map1[keys] > map2[keys] || !map2[keys]) {
            answer = false;
        }  
    } 
    return answer;
};