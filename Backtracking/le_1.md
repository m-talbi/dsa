#### Backtracking

- What is backtracking?

Backtracking is an algorithmic approach to find solutions to problems that involve many possible paths.

- Solutions are built step by step
  - Involves controlled recursion
  - Modify state of the problem in place (make changes in place with pass by reference)
- If a path doesn't lead to a solution or it violates a constraints. Then that path is abandoned

- How is it different from simple recursion?

recursion is just a function that calls itself until it reaches a base case

Backtracking is a controlled recursion, means that if the recursion leads to an invalid path, then that path is abandoned

- How does backtracking work?

1. Explore one option
2. Keep building the solution with recursion
   - if the recursion leads to an invalid path, then abandon that path and backtrack to take another one
   - if solution is found, return it

ex: Sudoku solver

- Pure recursion -> brute force

- Pass by reference / change in place

Changes are made on the memory address of the variable (backtracking)
A copy of the variable is made in the memory each time (pure recursion)

```mermaid
---
title: Permutation
---
graph TB
    A["[1, 2, 3]"] -- swap 0, 0 --> B["[1, 2, 3]"]
    A -- swap 0, 1 --> C["[2, 1, 3]"]
    A -- swap 0, 2 --> D["[3, 2, 1]"]

    B -- swap 1, 1 --> J["[1, 2, 3]"]
    B -- swap 1, 2 --> M["[1, 3, 2]"]

    C -- swap 1, 1 --> I["[2, 1, 3]"]
    C -- swap 1, 2 --> K["[2, 3, 1]"]

    D -- swap 1, 1 --> H["[3, 2, 1]"]
    D -- swap 1, 2 --> L["[3, 1, 2]"]
```

#### Side note

![alt text](<Screen Shot 2024-07-19 at 00.01.59.png>)

#### Complexity analysis of combinations tree

![alt text](<Screen Shot 2024-07-19 at 00.07.03.png>)
