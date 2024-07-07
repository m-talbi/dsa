/*
[Data Structure]

A data structure is:
- a collection of data values,
- the relationships among them,
- and the functions or operations that can be applied to the data.
*/

// `1. collection of data values`
const data = [1, 5, 6, 7, 2]


// `2. the relationships among them`
data.at(0); data.at(1) // data are placed contiguously


// `3. the functions or operations that can be applied to the data`
data.push(9) // adds an element to the end of the array


/*
[Complexity Analysis]

"What is the need for complexity analysis?"

Imagine you have a question like this:
- you have a number 'n'
- and you need to return {(n-1) + (n-2) + ... + 1}

one solution can be: {n * (n - 1) / 2}
other solution can be: {(n-1) + (n-2) + ... + 1}

`which approach is better?`
- {(n-1) + (n-2) + ... + 1}
  - consumes more of memory (2n - 3 operations) (n - 1): operands + (n - 2): operations `+`
  - slower (takes `n` iterations to finish)

- {n * (n - 1) / 2}
  - consumes a low amount of memory
  - faster (3 operations)

`Why care about identifying which is better?`
In real world scenarios, your solution is going to process huge amount of data.

`What does better mean?`
better means:
  - faster (time complexity)
  - less memory consumption (space complexity)

[Time Complexity]
- As n grows, what proportion does number of operations grow?
- to find time complexity, we need to perform asymptotic analysis expressed in terms of Big O notation

[Asymptotic Analysis]
Big O is used to classify an algorithms according to how their runtime or space grow as the input size grows.
Big O is expressed as function of n as n goes towards infinity (therefore, constants are ignored).
f(n) = n^2 + 5n + 1 -> O(n^2)
f(n) = 5n^3 -> O(n^3)
f(n) = 5n^2 + 2M -> O(n^2 + M)

[Common complexities (high to low)]
O(n!) -> factorial
O(2^n) -> exponential
O(n^2) -> quadratic
O(n log n) -> merge sort
O(n) -> operations are bounded by a multiple of n `linear increase`
O(log n) -> binary search algorithm
O(1) -> constant (time complexity stays the same as input size grows)

[Space Complexity]
space complexity is how much auxiliary memory (space required by the algorithm only)
needed to run the algorithm.
it is expressed in terms of Big O notation.

[Time Complexity vs. Space Complexity]
In some solutions, we can get a better time complexity by using more memory space.

[Logarithms]
log_2(8) = 3
that means 8 = 2^3 -> 8 - 4 - 2 - 1
The algorithm cuts the input in half each time.
if you double the input size, we add one extra step to the algorithm.

*/
