/*
Since the problem mentions that there "may be" duplicates
then the complexity is the same as the normal permutation
T = O(n*n!)
S = O(n) // the output is not involved in space complexity
*/

const permute = (nums = []) => {
    const isValid = (start, end) => {
        return start == end;
    }

    const backtrack = (start = 0, end = 0) => {
        if (isValid(start, end, nums)) { // is valid
            return result.push(structuredClone(nums));
        }

        const visited = new Set();

        for (let i = start; i < end; i++) {
            if (visited.has(nums[i])) continue;
            visited.add(nums[i]);

            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap elements (new candidate)
            backtrack(start + 1, end);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap back (backtrack)
        }
    };

    const result = [];
    backtrack(0, nums.length);
    return result;
};

permute([1, 1, 9, 9, 6, 8, 9, 8, 6, 0, 5, 5]);
