// https://leetcode.com/problems/min-cost-climbing-stairs/description/

/*
Memoization
T = O(n), compute once
S = O(n), n is the max depth
*/

const minCostClimbingStairs = (arr) => {
  const dp = Array(arr.length);

  const search = (step = 0) => {
    if (step >= arr.length) return 0;
    if (dp[step] !== undefined) return dp[step];

    const min = Math.min(search(step + 1), search(step + 2));

    dp[step] = arr[step] + min;
    return dp[step];
  }

  return Math.min(search(0), search(1));
}

const input1 = [1, 5, 1, 20, 25, 10];
const input2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
const input3 = [10, 15, 20]
const input4 = [10, 15, 20, 3, 21, 10]
const input5 = [5]

console.log(minCostClimbingStairs(input4));

/*
Tabulation
T = O(n)
S = O(n)
*/

const minCostClimbingStairs1 = (cost = []) => {
  const len = cost.length;
  const minCost = Array(len + 1).fill(0);
  minCost[0] = 0;
  minCost[1] = 0;

  for (let i = 2; i < len + 1; i++) {
    const oneStep = cost[i - 1] + minCost[i - 1];
    const twoSteps = cost[i - 2] + minCost[i - 2];

    minCost[i] = Math.min(oneStep, twoSteps);
  }

  return minCost[len];
}

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
