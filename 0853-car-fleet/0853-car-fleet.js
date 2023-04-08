/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    let map = {};
    position.forEach((car, idx) => {
       map[car] = speed[idx]; 
    });
    let positions = position.map(car => car).sort((a, b) => a - b);
    let rotations = positions.map(car => {
        return (target - car) / map[car];
    });
    let fleets = 0;
    while (rotations.length) {
        let start = rotations.pop();
        while (start >= rotations.at(-1)) {
            rotations.pop();
        }
        fleets += 1;
    }
    return fleets;
};