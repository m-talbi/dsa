// https://leetcode.com/problems/subsets/description/

/*
T = O(n*2^n)
S = O(n) // the output is not involved in space complexity
*/

var subsets = function(nums) {
    const res = [];
    const subset = [];

    const createSubset = function(i) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        createSubset(i + 1);

        subset.pop();
        createSubset(i + 1);
    };

    createSubset(0);
    return res;    
};

console.log(subsets([1, 2, 3]));