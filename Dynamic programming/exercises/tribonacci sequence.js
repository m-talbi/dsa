// https://leetcode.com/problems/n-th-tribonacci-number/description/

/*
T0 = 0,
T1 = 1,
T2 = 1,
and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
*/

/*
Memoization
T = O(n), n computations
S = O(n), max depth is n
*/
const tribonacci = (n, mem = {}) => {
	if (n == 0) return n;
	if (n < 3) return 1;

	if (mem[n] !== undefined) return mem[n];

	mem[n] = tribonacci(n - 1, mem) + tribonacci(n - 2, mem) + tribonacci(n - 3, mem);
	return mem[n];
};

/*
Tabulation
T = O(n), n operations
S = O(1), temp size doesn't grow as n grows
*/

const tribonacci2 = (n) => {
	if (n == 0) return n;

	let temp;
	let prev = 0;
	let next = 1;
	let next2 = 1;

	for (let i = 1; i < n; i++) {
		temp = next2;
		next2 = temp + next + prev;
		prev = next;
		next = temp;
	}

	return next;
}

console.log(tribonacci2(0));
console.log(tribonacci(0));

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

var tribonacci3 = function(n) {
    let memo = {};
    memo[0] = 0;
    let result = 0;
    for(let i = 1; i < n + 1; i++)
    {
        if(i <= 2)
        {
            result = 1;
        }
        else
        {
            result = memo[i - 1] + memo[i - 2] + memo[i - 3];
        }
        memo[i] = result;
    }
    return memo[n];
};