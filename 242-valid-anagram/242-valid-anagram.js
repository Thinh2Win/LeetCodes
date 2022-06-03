/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(string1, string2) {
      // if string1.length !== string2.length
  // return false
  if (string1.length !== string2.length) {
    return false;
  }
  // create an empty object variable for each string
  let map1 = {};
  let map2 = {};
  // split both strings
  let split1 = string1.split('');
  let split2 = string2.split('');
  // use a for loop to iterate over both split strings
  for (let i = 0; i < split1.length; i += 1) {
    // if map1[string1[i]] does not exist
    // then map1[string1[i]] = 1
    // else map1[string1[i]] += 1
    if (!map1[split1[i]]) {
      map1[split1[i]] = 1;
    } else {
      map1[split1[i]] += 1;
    }
    // do same for map2 and string 2
    if (!map2[split2[i]]) {
      map2[split2[i]] = 1;
    } else {
      map2[split2[i]] += 1;
    }
  }
  // compare map1 to map2
  for (keys in map1) {
    // for in loop to check if all keys and values of map1 are the same as in map2
    // if maps do not have the same count for the same letters
    // return false
    if (map1[keys] !== map2[keys]) {
      return false;
    }
  }
  // else return true
  return true;
};