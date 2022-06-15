/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const findDistance = (point) => {
    return (Math.pow(point[0], 2) + Math.pow(point[1], 2));
}

const quickSort = (array) => {
    if (array.length === 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];
        
    for (let i = 0; i < array.length - 1; i += 1) {
        if (findDistance(array[i]) < findDistance(pivot)) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    if (left.length > 0 && right.length > 0) {
        return [...quickSort(left), pivot, ...quickSort(right)];
    } else if (left.length === 0 && right.length > 0) {
        return [pivot, ...quickSort(right)];
    } else {
        return [...quickSort(left), pivot];
    }
}
var kClosest = function(points, k) {
     points.sort((a,b) => (Math.pow(a[0], 2) + Math.pow(a[1], 2)) - (Math.pow(b[0], 2) + Math.pow(b[1], 2)))
    return points.slice(0,k);
};