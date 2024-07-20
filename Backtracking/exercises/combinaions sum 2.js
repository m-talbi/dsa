// https://leetcode.com/problems/combination-sum-ii/

const combinationSum2 = (nums = [], target) => {
    const result = []
    const subset = []

    const comb = (sum = 0, start = 0) => {
        if (sum == target) {
            result.push(subset.slice());
            return;
        }

        if (sum > target) return;

         const visited = new Set();

        for (let i = start; i < nums.length; i++) {
            if (visited.has(nums[i])) continue;
            visited.add(nums[i]);

            subset.push(nums[i]);
            comb(sum + nums[i], i + 1);
            subset.pop();
        }
    }

    nums.sort((a, b) => a - b);
    comb();
    return result;
}

/*
T = O(2^n)
S = O(n)
*/
const combinationSum2_2 = (nums = [], target) => {
    const result = []
    const subset = []

    const comb = (sum = 0, start = 0) => {
        if (sum == target) {
            result.push(subset.slice());
            return;
        }

        if (sum > target) return;

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;

            subset.push(nums[i]);
            comb(sum + nums[i], i + 1);
            subset.pop();
        }
    }

    nums.sort((a, b) => a - b);
    comb();
    return result;
}

console.log(combinationSum2_2([10,1,2,7,6,1,5], 8));