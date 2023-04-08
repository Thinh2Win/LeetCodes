/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // [10,8,0,5,3]
    // [0, 3, 5, 8, 10]
    // to get rotations = (target - position) / speed
    // probably have to map the positions to their speeds 
    // [12, 3, 7, 1, 1] rotations needed to reach target
    // starting from right to left 
    // we know 2 cars become a fleet when 
        // number of rotations of the car to its left is less than or equal to its own rotations b/c 
        // this tells us that the car behind will always catch up and join the fleet if the number of its rotations is less than or equal to the number of rotations of the car in front 
    let map = {};
    position.forEach((car, idx) => {
       map[car] = speed[idx]; 
    });
    let positions = position.map(car => car).sort((a, b) => a - b);
    let rotations = positions.map(car => {
        return (target - car) / map[car];
    });
    let fleets = 0;
    rotations.unshift(Infinity);
    while (rotations.at(-1) !== Infinity) {
        let start = rotations.pop();
        while (start >= rotations.at(-1)) {
            rotations.pop();
        }
        fleets += 1;
    }
    return fleets;
};