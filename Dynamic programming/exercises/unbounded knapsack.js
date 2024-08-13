// https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1

/*
Memoization
*/

const knapSackMem = (maxWeight, weights, values) => {
    const dp = Array.from({ length: weights.length }, () => Array(maxWeight + 1).fill(-1))

    const search = (start = 0, rem = maxWeight) => {
        if (start == weights.length || rem <= 0) return 0;
        if (dp[start][rem] !== -1) return dp[start][rem];

        const exclude = search(start + 1, rem);
        let include = 0;

        if (weights[start] <= rem) {
            include = values[start] + Math.max(search(start, rem - weights[start]), search(start + 1, rem - weights[start]));
        }

        dp[start][rem] = Math.max(exclude, include);
        return dp[start][rem];
    }
    
    return search();
}

/*
Tabulation
T = O(n*w)
S = O(n*w)
*/

const knapSackTab = (maxWeight, weights, values) => {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(values[i - 1] + dp[i][j - weights[i - 1]], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][maxWeight];
}

/*
Tabulation (space optimized)
T = O(n*w)
S = O(w)
*/

const knapSackTabOp = (maxWeight, weights, values) => {
    const n = values.length;
    const dp = Array.from({ length: 2 }, () => Array(maxWeight + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[0][j] = dp[1][j];
            if (weights[i - 1] <= j) {
                dp[1][j] = Math.max(values[i - 1] + dp[1][j - weights[i - 1]], dp[0][j]);
            } else {
                dp[1][j] = dp[0][j];
            }
        }
    }

    return dp[1][maxWeight];
}

console.log(knapSackMem(8, [1, 3, 4, 5], [1, 4, 5, 7]));
console.log(knapSackTab(8, [1, 3, 4, 5], [1, 4, 5, 7]));
console.log(knapSackTabOp(8, [1, 3, 4, 5], [1, 4, 5, 7]));