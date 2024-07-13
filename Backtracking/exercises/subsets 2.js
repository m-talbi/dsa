// https://leetcode.com/problems/subsets-ii/

const subsetsWithDup = (nums) => {
  const result = []
  const subset = []
  let lastAddedSubset;

  const createSubset = (depth) => {
    if (subset.join("") === lastAddedSubset) return;

    if (depth === nums.length) {
      result.push([...subset])
      lastAddedSubset = subset.join("");
      return;
    }

    subset.push(nums[depth])
    createSubset(depth + 1)

    subset.pop()
    createSubset(depth + 1)
  }

  nums.sort((a, b) => a - b)
  createSubset(0)
  return result;
};

/*
T = O(n*2^n)
S = O(n)
*/
const subsetsWithDup2 = (nums) => {
  const result = []
  const subset = []

  const createSubset = (depth) => {
    if (depth === nums.length) {
      result.push([...subset])
      return;
    }

    subset.push(nums[depth])
    createSubset(depth + 1)

    subset.pop()

    while(depth < nums.length - 1 && nums[depth] == nums[depth + 1]) {
      depth++;
    }
    
    createSubset(depth + 1)
  }

  nums.sort((a, b) => a - b)
  createSubset(0)
  return result;
};

console.log(subsetsWithDup2([4, 4, 4, 1, 4]));