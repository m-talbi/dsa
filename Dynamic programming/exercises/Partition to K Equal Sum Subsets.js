// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/

const canPartitionKSubsets = (nums, k) => {
    const total = nums.reduce((acc, next) => acc + next, 0);

    if (total % k != 0) {
        return false;
    }

    nums.sort((a, b) => a - b);
    const subsetSum = total / k;
    const visited = Array(nums.length).fill(false);
    return canPartition(nums, visited, 0, k, 0, subsetSum);
}

const canPartition = (nums, visited, start, k, curSum, subsetSum) => {
    if (k == 0) return true;
    if (curSum == subsetSum) return canPartition(nums, visited, 0, k - 1, 0, subsetSum);
    
    for (let i = start; i < nums.length; i++) {
        if (visited[i] || curSum + nums[i] > subsetSum) continue;

        visited[i] = true;

        if (canPartition(nums, visited, i + 1, k, curSum + nums[i], subsetSum)) {
            return true;
        }

        visited[i] = false;
    }

    return false;
}

console.log(canPartitionKSubsets([4, 2, 1, 1, 3, 1], 3));
