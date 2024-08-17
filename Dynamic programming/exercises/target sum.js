// https://leetcode.com/problems/target-sum/description/

/*
Brute force
T = O(2^n)
S = O(n)
*/

const findTargetSumWays = function(nums, target) {
    let exps = 0;

    const search = (sum = 0, start = 0) => {
        if (start > nums.length) return;
        if (sum == target && start == nums.length) {
            exps++;
            return;
        }

        search(sum + nums[start], start + 1);
        search(sum - nums[start], start + 1);
    }
    search();
    return exps;
};

/*
Memoization
*/

const findTargetSumWaysMem = function(nums, target) {
    const sum = nums.reduce((acc, next) => acc + next, 0);
    const dp  = Array.from({ length: nums.length }, () => Array(sum * 2 + 1).fill(-1));

    const search = (i = nums.length - 1, cur_sum = 0) => {
        if (i < 0) {
            if (cur_sum == target) return 1;
            return 0;
        }

        if (dp[i][cur_sum + sum] != -1) return dp[i][cur_sum + sum];

        const neg = search(i - 1, cur_sum + nums[i]);
        const pos = search(i - 1, cur_sum - nums[i]);

        dp[i][cur_sum + sum] = neg + pos;
        return dp[i][cur_sum + sum];
    }

    return  search();
};

console.log(findTargetSumWays([2, 1, 2], 3));
console.log(findTargetSumWaysMem([2, 1, 2], 3));
