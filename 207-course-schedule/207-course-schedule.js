/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
// create map 
    let map = new Map();
    let q = new Set();
    let visited = new Set();
    let answer = true;
    for (let [course, req] of prerequisites) {
        if (map.has(course)) {
            let reqs = map.get(course);
            reqs.push(req);
            map.set(course, reqs); 
        } else {
            map.set(course, [req]);
        }
    }
// once map is created 
   const loop = (node) => {
       q.add(node);
       let neighbors = map.get(node);
       
       if (neighbors) {
           for (let neighbor of neighbors) {
               if (visited.has(neighbor)) {
                   continue;
               }
               
               if (q.has(neighbor)) {
                   return true;
               }
               
               if (loop(neighbor)) {
                   return true;
               }
           }
       }
       q.delete(node);
       visited.add(node);
       return false;
   }
   
   for (const[course, req] of map) {
       if (loop(course)) {
           return false;
       }
   }
    return true;
};