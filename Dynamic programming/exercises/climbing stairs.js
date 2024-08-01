// https://leetcode.com/problems/climbing-stairs/description/

const climbStairs = (n, mem = {0: 1, 1: 1}) => {
  if (mem[n] !== undefined) return mem[n];

  mem[n] = climbStairs(n - 2, mem) + climbStairs(n - 1, mem);

  return mem[n];
}

var climbStairs2 = function(n) {
  let ways = [1, 2];
  
  for (let i = 2; i < n; i++) {
      ways[i] = ways[i - 1] + ways[i - 2]
  }

  return ways[n - 1]
};


console.log(climbStairs(44));