// https://leetcode.com/problems/sudoku-solver

/*

Clarifying questions:
What if there is no solution ? -> there will be a solution
What if there are more than a single solution ? -> there exists only one solution

*/

/*
Note: Complexity analysis studies the complexity of the algorithm as the input grows
T = O(1) size is always 9 => number of operations is always 9²
S = O(1) number of calls in the worst case is always n*n / 9²
*/
const sudokuSolver = (sudoku = []) => {

	const isValid = (row, col, candidate) => {
		for (let i = 0; i < sudoku.length; i++) {
			if (sudoku[i][col] === candidate) return false;
			if (sudoku[row][i] === candidate) return false;

			const box_row = 3 * Math.trunc(row / 3) + Math.trunc(i / 3)
			const box_col = 3 * Math.trunc(col / 3) + i % 3

			if (sudoku[box_row][box_col] === candidate) return false;
		}

		return true;
	}

	const solve = () => {
		for (let i = 0; i < sudoku.length; i++) {
			for (let j = 0; j < sudoku[0].length; j++) {
				if (sudoku[i][j] !== ".") continue;

				for (let candidate of "123456789") {
					if (isValid(i, j, candidate)) {
						sudoku[i][j] = candidate;

						const isSolution = solve();

						if (isSolution) return true;

						sudoku[i][j] = ".";
					}
				}

				// All candidate are invalid
				// => backtrack
				return false;
			}
		}

		// the whole board is filled with valid solutions
		// at this state i = 8, j = 8
		// this is the base case where we need to go back to the previous call at line 41
		return true;
	}

	solve();
	return sudoku;
}

class Solution {
	DIGITS = Array.from(Array(9), (_, i) => `${i + 1}`);

	search(input) {
		for (let i = 0; i < input.length; i++) {
			for (let j = 0; j < input.length; j++) {
				if (input[i][j] !== ".") continue;

				const candidates = this.getCandidates(input, i, j);

				for (let candidate of candidates) {
					input[i][j] = candidate;
					const isSolution = this.search(input);
					if (isSolution) return true;
					input[i][j] = ".";
				}

				return false;
			}
		}

		return true;
	}

	solve(input = []) {
		this.search(input);
		return input;
	}

	getCandidates(input, row, col) {
		const candidates = new Set(this.DIGITS);

		for (let i = 0; i < input.length; i++) {
			candidates.delete(input[i][col]);
			candidates.delete(input[row][i]);

			const box_row = 3 * Math.trunc(row / 3) + Math.trunc(i / 3)
			const box_col = 3 * Math.trunc(col / 3) + i % 3

			candidates.delete(input[box_row][box_col]);
		}

		return candidates;
	}
}

const problem1 = [
	["2", ".", "."],
	["3", "4", "."],
	[".", "5", "9"]
]

const problem2 = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const solver = new Solution();
console.log(solver.solve(problem2));
console.log(sudokuSolver(problem2));
