// https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/

// 1 (2) 3 4 5 -> 1 [3] 4 5
// 1 3 (4) 5 -> 1 3 [5]
// (1) 3 5 -> [3] 5
// 3 (5) -> 3

/*
T = O(n)
S = O(n)
*/

const findTheWinner = (n, k) => {
  if (n == 1) {
    return 1;
  }

  return ((findTheWinner(n - 1, k) - 1 + k) % n) + 1;
};

/*
T = O(n)
S = O(1)
*/
const findTheWinner2 = (n, k) => {
  for (var i = 2, prev = 0; i <= n; i++) prev = (prev + k) % i;

  return prev + 1;
};

console.log(findTheWinner2(6, 5));
