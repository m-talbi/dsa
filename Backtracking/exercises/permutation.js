/*

S = O(n)
*/
const permute = (nums = []) => {
  const backtrack = (start = 0, end = 0) => {
    if (start == end) {
      // is valid
      result.push(structuredClone(nums));
      return;
    }

    for (let i = start; i < end; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // new candidate
      backtrack(start + 1, end);
      [nums[start], nums[i]] = [nums[i], nums[start]]; // backtrack
    }
  };

  const result = [];
  backtrack(0, nums.length);
  return result;
};

console.log(permute([1, 2, 5]));
