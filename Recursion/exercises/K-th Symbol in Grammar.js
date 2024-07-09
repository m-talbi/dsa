// https://leetcode.com/problems/k-th-symbol-in-grammar/description/

/*

[Clarifying questions]
is it possible that `n` is given as `0`? No, n >= 1
What if k is out of bound? (k > length of last row) No, 1 <= k <= 2^{n-1}


*/

/*
T = O(n)
S = O(n)
*/
const kthGrammar = (n, k) => {
  if (n == 1) {
    return 0
  }

  const len = Math.pow(2, n - 1); // 16 8 4
  const mid = Math.round(len / 2); // 8 4 2

  if (k <= mid) { // 8 <= 8 8 <= 4 4 <= 2 2 <= 2 2 <= 1 
    return kthGrammar(n - 1, k); // 0
  } else {
    return Number(!Boolean(kthGrammar(n - 1, k - mid)))
  }
}

// [0]
// [0]1 -> mid 1
// 0[1]10 - mid 0
// 011[0]1001 - mid 1
// 0110100[1]10010110 - shrink 1

const kthGrammar2 = (n, k) => {
  if (n == 1) return 0;

  if (k % 2 == 0) {
      return kthGrammar2(n - 1, k / 2) == 0 ? 1 : 0;
  } else {
      return kthGrammar2(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
  }
}

const kthGrammar3 = (n, k) => {
  let ans = 0;

  while(k != 1)
  {
      ans ^= (k & 1) ^ 1;
      k = Math.floor(k / 2);
  }
  return ans;
}

console.log(kthGrammar(5, 8))