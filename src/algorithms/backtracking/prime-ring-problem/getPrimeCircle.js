/**
 * Prime Ring Problem
 * @param {number} n - 0 < n <= 16
 * @return {number} - the number of prime rings
 */
function getPrimeCircle(n) {
  const array = [1];
  const used = {};
  let count = 0;

  function backtrack(start) {
    if (start === n) {
      if (isPrime(array[0] + array[n - 1])) {
        count++;
      }
    } else {
      for (let i = 2; i <= n; i++) {
        // 條件為沒有使用過且前一個數值與下一個 i+1 的和為質數
        if (!used[i]) {
          used[i] = true;
          if (isPrime(array[start - 1] + i)) {
            array[start] = i;
            backtrack(start + 1);
          }
          used[i] = false;
        }
      }
    }
  }

  backtrack(1);
  return count;
}

const primes = {
  2: true,
  3: true,
};
function isPrime(k) {
  const n = Math.sqrt(k);

  if (primes[k] !== undefined) {
    return primes[k];
  }

  if (k % 2 === 0) {
    return (primes[k] = false);
  }

  for (let i = 3; i <= n; i++) {
    if (k % i === 0) {
      return (primes[k] = false);
    }
  }

  return (primes[k] = true);
}

export { getPrimeCircle };
