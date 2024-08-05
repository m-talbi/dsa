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

// weights, values, weight
const input = [
    [1, 2, 3, 2], [3, 4, 2, 4], // 4
    [4, 5, 1], [1, 2, 3], // 4
    [4, 5, 6], [1, 2, 3], // 3

]

console.log(knapSack(4, input[2], input[3]));
console.log(knapSack2(4, input[2], input[3]));