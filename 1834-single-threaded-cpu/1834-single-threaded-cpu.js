/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
 // 1. sort the tasks by start time
  tasks = tasks
    .map((task, index) => ({
      startTime: task[0],
      processingTime: task[1],
      index
    }))
    .sort((a, b) => a.startTime - b.startTime)
  
  // 2. create a minHeap. The `compare` fn is implemented to prioritize lower `processingTime`
  //    first, and `index` second.
  const pq = new MinPriorityQueue({ 
    compare: (a, b) => {
      if (a.processingTime === b.processingTime) return a.index - b.index
      return a.processingTime - b.processingTime
    }
  })
                                   
  let currentTime = 0
  let taskIndex = 0
  const result = []
  
  // 3. We iterate until we fill the result array entirely
  while (result.length < tasks.length) {
    
    // 4. We push all the tasks that could be ran now (based on the start time)
    //    in the priority queue. The priority queue will then take care of
    //    telling us which one will come first.
    while(taskIndex < tasks.length && tasks[taskIndex].startTime <= currentTime) {
      pq.enqueue(tasks[taskIndex])
      taskIndex ++
    }
    
    if (!pq.isEmpty()) {
      // 5. If pq has tasks available, we dequeue the first one and put it into
      //    the result array. We increase the currentTime accordingly.
      const bestFit = pq.dequeue()
      result.push(bestFit.index)
      currentTime += bestFit.processingTime
    } else if (taskIndex < tasks.length) {
      // 6. If pq is empty, we "time travel" and use the next task's `startTime`
      //    as currentTime.
      currentTime = tasks[taskIndex].startTime
    }
  }
  
  return result
};