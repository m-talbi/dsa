// https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1

/*
This problem can be identified as a DP problem because we are presented with choices.
When you have choices:
- You can solve the problem with recursion.
- or you can use DP, especially when tasked with finding the optimal solution or max value.

Always follow these steps:
1. Recursion
2. Memoization (top down)
3. Tabulation (bottom up)
4. Space optimization
*/

/*
Recursive approach
T = O(2^n)
S = O(n)
*/

const knapSack = (maxWeight, weights, values) => {
    let max = 0;

    const search = (start = 0, weightsSum = 0, value = 0) => {
        if (value > max && weightsSum <= maxWeight) {
            max = value;
        }

        if (weightsSum >= maxWeight) return;

        for (let i = start; i < values.length; i++) {
            search(i + 1, weightsSum + weights[i], value + values[i]);
        }
    }

    search();
    return max;
}

const knapSack2 = (maxWeight, weights, values) => {

    const search = (index = 0, remWeight = maxWeight) => {
        if (index > values.length - 1 || remWeight == 0) return 0;

        const exclude = search(index + 1, remWeight);
        let include = 0;

        if (weights[index] <= remWeight) {
            include = values[index] + search(index + 1, remWeight - weights[index]);
        }

        return Math.max(include, exclude);
    }

    return search();
}

/*
Memoization (not optimal for large input as it may results in stack overflow)
T = O(n*w)
S = O(n*w), dp size
*/

const knapSack3 = (maxWeight, weights, values) => {
    const dp = Array.from({ length: weights.length }, () => Array(maxWeight + 1).fill(-1));
    const n = weights.length;

    const search = (index, maxWeight) => {
        if (index > n - 1 || maxWeight == 0) {
            return 0;
        }

        if (dp[index][maxWeight] != -1) {
            return dp[index][maxWeight];
        }

        const exclude = search(index + 1, maxWeight)
        let include = 0

        if (weights[index] <= maxWeight) {
            include = values[index] + search(index + 1, maxWeight - weights[index])
        }

        dp[index][maxWeight] = Math.max(exclude, include)
        return dp[index][maxWeight]
    }

    const res = search(0, maxWeight);
    return res;
}

function getKnapSack(capacity, weights, values, cache = new Map(), n = values.length) {
    if (n == 0 || capacity == 0) return 0
  
    if (cache.has(`${n}/${capacity}`)) return cache.get(`${n}/${capacity}`);

    let result;
  
    if (weights[n-1] > capacity) {
        result = getKnapSack(capacity, weights, values, cache, n - 1);
    } else {
        const included_value = values[n-1] + getKnapSack(capacity - weights[n-1], weights, values, cache, n-1);
        const excluded_value = getKnapSack(capacity, weights, values, cache, n - 1);
        result = Math.max(included_value, excluded_value);
    }

    cache.set(`${n}/${capacity}`, result);
    return result;
}

/*
Tabulation
exclude is dp[i - 1][j]
include is values[i - 1] + dp[i - 1][rem]
T = O(n*w), we have 2 nested loops of length n, w
S = O(n*w), dp size grows as n grows
*/

const knapSack4 = (maxWeight, weights, values) => {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            const rem = j - weights[i - 1];

            if (rem >= 0) {
                dp[i][j] = Math.max(values[i - 1] + dp[i - 1][rem], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][maxWeight];
}

const knapSack4Improved = (maxWeight, weights, values) => {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            const exclude = dp[i - 1][j];
            let include = 0;
            
            if (weights[i - 1] <= j) {
                include = values[i - 1] + dp[i - 1][j - weights[i - 1]];
            }

            dp[i][j] = Math.max(exclude, include);
        }
    }

    return dp[n][maxWeight];
}

/*
Tabulation (space optimized)
T = O(n*w), we have 2 nested loops of length n, w
S = O(2*w) => O(w), dp row size is always 2, col size is w.
*/

const knapSack4SpaceOptimized = (maxWeight, weights, values) => {
    const n = values.length;
    const dp = Array.from({ length: 2 }, () => Array(maxWeight + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[0][j] = dp[1][j];
            const exclude = dp[0][j];
            let include = 0;
            
            if (weights[i - 1] <= j) {
                include = values[i - 1] + dp[0][j - weights[i - 1]];
            }

            dp[1][j] = Math.max(exclude, include);
        }
    }

    return dp[1][maxWeight];
}

// weights, values, weight
const input = [
    [1, 2, 3, 2], [3, 4, 2, 4], // 4
    [4, 5, 1], [1, 2, 3], // 4
    [4, 5, 6], [1, 2, 3], // 3
    [2, 3, 5, 1], [3, 1, 4, 2], // 5
    [1, 3, 4, 5], [1, 4, 5, 7], // 7
]

console.log(knapSack4(4, input.at(2), input.at(3)));
console.log(knapSack4Improved(4, input.at(2), input.at(3)));
console.log(knapSack4SpaceOptimized(4, input.at(2), input.at(3)));