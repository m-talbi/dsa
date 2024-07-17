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

console.log(combinations2([3, 5, 8], 11));
