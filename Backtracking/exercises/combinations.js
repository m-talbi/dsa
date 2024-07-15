// https://leetcode.com/problems/combinations/description/

const combinations = (n, k) => {
  const result = [];

  const permute = (subset, n) => {
    if (subset.length == k) {
      result.push([...subset]);
      return;
    }
  
    for (let i = n; i >= 1; i--) {
      subset.push(i);
      permute(subset, i - 1);
      subset.pop();
    }
  }

  permute([], n);
  return result;
}

// def combine(n, k):
//     res = []
//     def helper(start,curr):
//         if len(curr)==k:
//             res.append(curr[:])
//             return
//         need = k - len(curr)    
//         for j in range(start,n-(need-1)+1):
//             curr.append(j)
//             helper(j+1,curr)
//             curr.pop()
//     helper(1,[])
//     return res 

/*
T = O(k * n!/k!(n - k)!) 1st k is depth and at each depth we are doing nCk operations
S = O(k) max depth is k
*/
function combinations2(n, k) {
  const result = [];

  function backtrack(combination, start) {
      if (combination.length === k) {
          result.push([...combination]);
          return;
      }

      const need = k - combination.length

      for (let i = start; i <= n - (need - 1); i++) {
          combination.push(i);
          backtrack(combination, i + 1);
          combination.pop();
      }
  }

  backtrack([], 1);
  return result;
}

console.log(combinations2(5, 3));