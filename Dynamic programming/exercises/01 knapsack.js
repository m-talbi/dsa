// https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1

const knapSack = (maxWeight, weights, values) => { 
   let max = 0;

    const search = (start = 0, weightsSum = 0, value = 0) => {
        if (value > max && weightsSum <= maxWeight) {
            max = value;
        }

        if (weightsSum > maxWeight) return;

        for (let i = start; i < values.length; i++) {
            search(i + 1, weightsSum + weights[i], value + values[i]);
        }
    }

    search();
    return max;
}

// weights, values, weight
const input = [
    [1, 2, 3, 2], [3, 4, 2, 4], // 4
    [4, 5, 1], [1, 2, 3], // 4
    [4, 5, 6], [1, 2, 3], // 3

]

console.log(knapSack(4, input[2], input[3]));