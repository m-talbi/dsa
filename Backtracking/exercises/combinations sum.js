// https://leetcode.com/problems/combination-sum/description/

// both implementations are the same

function combinationSum(nums = [], target) {
  const result = [];

  function backtrack(combination = [], sum = 0, i = 0) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }

    if (sum > target || i == nums.length) return;

    combination.push(nums[i]);
    sum += nums[i];
    backtrack(combination, sum, i);

    sum -= nums[i];
    combination.pop();
    backtrack(combination, sum, i + 1);
  }

  backtrack([]);
  return result;
}

function combinationSum_2(nums = [], target) {
  const result = [];

  function backtrack(combination = [], sum = 0, start = 0) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < nums.length; i++) {
      combination.push(nums[i]);
      backtrack(combination, sum + nums[i], i);
      combination.pop()
    }
  }

  backtrack([]);
  return result;
}

console.log(combinationSum_2([3, 5, 8], 11));
