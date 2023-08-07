/**
 * Flowshop Scheduling Problem
 * @param {number} n
 * @param {number[]} timeA
 * @param {number[]} timeB
 * @return {[number, number[]]} - [bestTime, bestFlow]
 */
function schedule(n, timeA, timeB) {
  let bestTime = Infinity;
  const bestFlow = [];
  const candidate = [];
  const used = {};

  function backtrack(start) {
    if (start === n) {
      let prevA = 0;
      let prevB = 0;
      let time = 0;
      for (let i = 0; i < n; i++) {
        const index = candidate[i];
        const taskA = prevA + timeA[index];
        const taskB = Math.max(taskA, prevB) + timeB[index];
        prevA = taskA;
        prevB = taskB;
        time += taskB;
      }

      if (time < bestTime) {
        bestTime = time;
        bestFlow.length = 0;
        bestFlow.push(...candidate);
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (!used[i]) {
          candidate.push(i);
          used[i] = true;
          backtrack(start + 1);
          used[i] = false;
          candidate.pop();
        }
      }
    }
  }

  backtrack(0);
  return [bestTime, bestFlow];
}

export { schedule };
