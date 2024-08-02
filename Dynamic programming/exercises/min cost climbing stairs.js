// https://leetcode.com/problems/min-cost-climbing-stairs/description/

const minCostClimbingStairs = (arr) => {
  if (arr.length == 1) return 0;
  const dp = Array(arr.length);

  const search = (step = 0) => {
    if (step >= arr.length) return 0;
    if (dp[step] !== undefined) return dp[step];

    const min = Math.min(search(step + 1, dp), search(step + 2, dp));

    dp[step] = arr[step] + min;
    return dp[step];
  }

  search();
  return Math.min(dp[0], dp[1]);
}

const input1 = [1, 5, 1, 20, 25, 10];
const input2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
const input3 = [10, 15, 20]
const input4 = [10, 15, 20, 3, 21, 10]
const input5 = [5]

console.log(minCostClimbingStairs(input4));

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

const minCostClimbingStairs2 = function (cost) {
  const dp = new Array(cost.length + 1).fill(-1);

  cost.push(0);

  const dfs = (idx) => {
    if (idx <= 1) return cost[idx];
    if (dp[idx] !== -1) return dp[idx];

    const left = dfs(idx - 1) + cost[idx];
    const right = dfs(idx - 2) + cost[idx];

    dp[idx] = Math.min(left, right);
    return Math.min(left, right);
  }

  return dfs(cost.length - 1);
};

/*
#######################################################################################################################################
##################################################### SOLUTION 3 ######################################################################
#######################################################################################################################################
*/

function minCostClimbingStairs3(cost) {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  let first = cost[0];
  let second = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(first, second);
    first = second;
    second = current;
  }

  return Math.min(first, second);
}
