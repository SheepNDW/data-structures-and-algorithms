// ==== Top-down approach (memoization) ====
function fibonacci(n) {
  const cache = { 0: 0, 1: 1, 2: 1 };

  function fib(n) {
    if (cache[n] !== undefined) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib(n);
}

// ==== Bottom-up approach ====
function fib(n) {
  const table = [0, 1, 1]; // dp table
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2]; // fill the table
  }
  return table[n];
}

// ==== Bottom-up approach (space optimized) ====
function fib2(n) {
  let a = 0;
  let b = 1;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export { fibonacci, fib, fib2 };
