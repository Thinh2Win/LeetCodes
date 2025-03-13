/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // create array to hold strings 
    let answer = [];
    // need a curr length, number of spaces 
    let currLength = 0;
    let spaces = 0;
    // as we iterate through words, we keep track of curr words we can add together
    // with each iteration we add length of curr word to curr length and then 1 to spaces 
    let currWords = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
    // make sure to check for condition when we're at last line 
      
    // if curr length + spaces + curr word > maxwidth, we know to build the line and push into our array 
        if (currLength + spaces + word.length > maxWidth) {
            answer.push(buildLine(currWords, currLength, spaces, maxWidth));
            currLength = 0;
            spaces = 0;
            currWords = [];
        } 
        currWords.push(word)
        currLength += word.length;
        spaces += 1;
        if (i === words.length - 1) {
            answer.push(buildLastLine(currWords, currLength, maxWidth));
        }
    }
    return answer;
};

function buildLine(arr, currLength, spaces, maxWidth) {
    if (arr.length === 1) return buildLastLine(arr, currLength, maxWidth);

    let totalSpaces = maxWidth - currLength;
    let lengths = Math.floor(totalSpaces / (arr.length - 1));
    console.log(totalSpaces, lengths)
    let remainder = totalSpaces - (lengths * (arr.length - 1));
    let strings = new Array(arr.length - 1).fill(lengths);
    console.log(strings)
    for (let i = 0; i < remainder; i++) {
        strings[i] += 1;
    }
    let line = [];
    for (let j = 0; j < strings.length; j++) {
        // push arr[j] which is our word 
        line.push(arr[j]);
        // push strings[j] is the number of empty strings we need to create 
        line.push(' '.repeat(strings[j]));
    }
    // push final word 
    line.push(arr.at(-1));
    console.log(line.join('').length, 'line length')
    return line.join('');
}

function buildLastLine(arr, currLength, maxWidth) {
    let string = arr.join(' ');
    let totalSpaces = maxWidth - string.length;
    if (totalSpaces) string += ' '.repeat(totalSpaces);
    return string;
}