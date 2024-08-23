// https://leetcode.com/problems/partition-equal-subset-sum/

/*
Recursion
*/

const canPartitionRec = (nums) => {
    const sum = nums.reduce((acc, next) => acc + next, 0);
    if (sum % 2 != 0) return false;

    const target = sum / 2;

    const solution = (arr, target, index) => {
        if (target == 0) return true;
        if (index == 0) return (arr[0] == target);
    
        const notTake = solution(arr, target, index - 1);
    
        let take = false;
        if (target >= arr[index]) {
            take = solution(arr, target - arr[index], index - 1);
        }
    
        return take || notTake;
    }

    return solution(nums, target, nums.length - 1);
}

/*
Memoization
*/

const canPartitionMem = (nums) => {
    const sum = nums.reduce((acc, next) => acc + next, 0);
    if (sum % 2 != 0) return false;

    const target = sum / 2;
    const dp = Array.from({ length: nums.length }, () => Array(target + 1).fill(-1));

    const solution = (arr, target, index) => {
        if (target == 0) return true;
        if (index == 0) return (arr[0] == target);
        if (dp[index][target] != -1) {
            return dp[index][target];
        }
    
        const notTake = solution(arr, target, index - 1);
    
        let take = false;
        if (target >= arr[index]) {
            take = solution(arr, target - arr[index], index - 1);
        }
    
        return dp[index][target] = take || notTake;
    }

    return solution(nums, target, nums.length - 1);
}

console.log(canPartitionMem([1, 2, 3, 4, 4]));
