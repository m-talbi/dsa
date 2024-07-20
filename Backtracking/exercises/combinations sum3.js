// https://leetcode.com/problems/combination-sum-iii

const combinationSum3 = (len, target) => {
  const result = [];

  const dfs = (combination, idx = 1, sum = 0) => {
    if (sum == target && combination.length == len) {
      result.push(combination.slice());
      return;
    }

    if (combination.length == len) return;

    for (let i = idx; i < 10; i++) {
      combination.push(i);
      dfs(combination, i + 1, sum + i);
      combination.pop();
    }
  }

  dfs([]);
  return result;
}

console.log(combinationSum3(3, 9));