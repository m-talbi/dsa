#### Dynamic programming (store to avoid recomputing)

- Many problems that can be solved with recursion can be solved better with DP

one approach in DP is to have recursion + storage (memoization)

another approach is to have a table (tabulation) and solve the problem from bottom up

A problem that requires DP might exhibit:
- Overlapping sub problems (think of fibonacci series)
- Optimal sub structure
    - optimal solution to a problem can be constructed from optimal solutions to its sub problems
    ex: to find fib(5) -> find fib(4), fib(3), fib(2)
    however tower of hanoi does not have optimal sub structure
    because solving n-1 disks does not solve n disks

#### Patterns

- There are many patterns and variations DP therefore, its recommended to:
1. Study a pattern
2. Relate the question to the pattern

Some of the major patterns:

1. Fibonacci based
2. Knapsack pattern
3. LCS pattern
4. LIS
5. Gap strategy
6. Partition strategy
7. Kadane's algorithm

#### Approach to solve DP problems

Important: Starting with drawing a table is wrong.

1. Write the recursive solution
2. Memoization (top down)
  - It is called top down because it starts from the original/large problem (top), then goes down to smaller problems
3. Tabulation (bottom up)
  - It is called bottom up because it starts with the smallest sub problems (bottom), then goes up
4. space optimization