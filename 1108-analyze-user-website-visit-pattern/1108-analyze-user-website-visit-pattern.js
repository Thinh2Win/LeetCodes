/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    /*
        find a pattern of 3 visited websites
        websites do not have to be visited in contiguous order 

        since our arrays will only be at max length 50, we can use brute force 

        1.) for each person, we track the order of the websites they visited 
            - so for joe we have [home, about, career] 
            - james [home, cart, maps, home]
            - mary [home, about, career, career]
        2.) find all possible patters for each person and track the frequency of pattern in a map 
            - for james -> [home cart map] [home cart home], [home maps home], [cart maps home]
            - use 3 for loops to find combinations 
            - need to make sure a pattern is counted once per user, so one user visiting the same patter multiple times 
            only counts once (use a set for this)
            - each user has their own set to track their patterns
            - use the set to update pattern frequency in map 
    */
    const people = {};
    for (let i = 0; i < username.length; i++) {
        let name = username[i];
        let time = timestamp[i];
        let site = website[i];
        if (people[name]) {
            people[name].enqueue([time, site]) 
        } else {
            let minQ = new MinPriorityQueue(duple => duple[0]); // [time, site]
            minQ.enqueue([time, site]);
            people[name] = minQ;
        }
    }
    let patterns = {};
    for (let heap of Object.values(people)) {
        let set = new Set();
        let websites = Array.from(heap).map(duple => duple[1]); // return just the websites
        // loop through the websites to find all possible patterns 
        findPatterns(set, websites);
        Array.from(set).forEach(pattern => {
            patterns[pattern] ? patterns[pattern] += 1 : patterns[pattern] = 1; 
        });
    }
    let max = Math.max(...Object.values(patterns));
    let answer = findHighestScore(max, patterns);
    return answer;
};

function findPatterns(set, websites) {
    if (websites.length < 3) return;
    for (let i = 0; i < websites.length; i++) {
        for (let j = i + 1; j < websites.length; j++) {
            for (let k = j + 1; k < websites.length; k++) {
                set.add(`${websites[i]},${websites[j]},${websites[k]}`);
            }
        }
    }
}

function findHighestScore(freq, patterns) {
    let choices = [];
    for (let pattern in patterns) {
        if (patterns[pattern] === freq) {
            choices.push(pattern);
        }
    }
    choices.sort();
    return choices[0].split(',');
}