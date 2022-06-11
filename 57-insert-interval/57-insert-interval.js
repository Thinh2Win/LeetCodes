/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const checkOverlap = (current, insert) => {
  if ((insert[1] <= current[1] && insert[1] >= current[0]) ||
  (insert[0] >= current[0] && insert[0] <= current[1]) ||
  ((insert[0] >= current[0] && insert[0] <= current[1]) && (insert[1] >= current[0] && insert[1] <= current[1])) ||
  ((current[0] >= insert[0] && current[0] <= insert[1]) && (current[1] >= insert[0] && current[1] <= insert[1]))
  ) {
    return true;
  } else {
    return false;
  }
};

var insert = function(intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval];
    }
    let results = [];
  let inserted = newInterval;
  for (let i = 0; i < intervals.length; i += 1) {
    if (checkOverlap(intervals[i], inserted)) {
      inserted = [Math.min(...intervals[i], ...inserted), Math.max(...intervals[i], ...inserted)];
    } else {
      if (inserted[1] < intervals[i][0]) {
        results.push(inserted);
        inserted = intervals[i];
      } else {
        results.push(intervals[i]);
      }
    }
  }
  results.length === 0 ? results.push(inserted) : null;
  checkOverlap(results[results.length - 1], inserted) ? null : results.push(inserted);
  return results;
};