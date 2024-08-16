// https://leetcode.com/problems/target-sum/description/

/*
Brute force
T = O(2^n)
S = O(n)
*/

const findTargetSumWays = function(nums, target) {
    let exps = 0;

    const search = (sum = 0, start = 0) => {
        if (added > nums.length) return;
        if (sum == target && added == nums.length) {
            exps++;
            return;
        }

        search(sum + nums[start], start + 1);
        search(sum - nums[start], start + 1);
    }
    search();
    return exps;
};

console.log(findTargetSumWays([2, 1, 2], 3));
