// https://leetcode.com/problems/fibonacci-number/description/

/*
Un-optimized solution
T = #nodes * work done in each node
T = O(2^n) each call requires 2 calls n - 1 and n - 2
S = O(n) n is the max depth
*/
const fib2 = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

/*
Memoized solution
T = O(n) since we only need to do n operations, 
and extra operations are avoided because we have their results stored
S = O(n), max depth is n, and hash table size grows n times
*/
const fib = (n, mem = {0: 0, 1: 1}) => {
  if (mem[n] !== undefined) return mem[n];
  mem[n] = fib(n - 2, mem) + fib(n - 1, mem);
  return mem[n];
}

/*
Tabulation
T = O(n), n operations
S = O(n), n size for table
*/
const tabularFib = (n) => {
  const dp = Array(n + 1).fill(0);

  if (n > 0) {
    dp[1] = 1
  }

  let count = 1;

  while(count < n) {
    dp[++count] = dp[count - 1] + dp[count - 2];
  }

  return dp[n];
}

/*
Space optimized tabulation
T = O(n)
S = O(1)
*/

var fib3 = function(n) {
  if (n == 0) {
    return 0;
  }

  let temp, next = 1, prev = 0;

  for (let i = 1; i < n; i++){
      temp = next;
      next = next + prev;
      prev = temp;
  }

  return next;
};