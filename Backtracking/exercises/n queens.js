const solveNQueens = (n) => {
	const QUEEN = "Q";
	const EMPTY = ".";

	const map = Array.from(Array(n), (_) => Array.from(Array(n), (_) => "."));
	const result = [];

	const canPlaceQueen = (map, row, col) => {
		for (let i = 1; i < n + 1; i++) {
			if (row - i >= 0 && map[row - i][col] == QUEEN) return false;
			if ((row - i >= 0 && col + i < n) && map[row - i][col + i] == QUEEN) return false;
			if ((row - i >= 0 && col - i >= 0) && map[row - i][col - i] == QUEEN) return false;
		}

		return true;
	}

	const solve = (i = 0) => {
		if (i == n) {
			result.push(map.map(arr => arr.join("")));
			return;
		}

		for (let j = 0; j < n; j++) {
			if (map[i][j] == QUEEN) continue;

			if (canPlaceQueen(map, i, j)) {
				map[i][j] = QUEEN;
				solve(i + 1);
				map[i][j] = EMPTY;
			}
		}
	}

	solve();
	return result;
}

var solveNQueens2 = function(n) {
	const solutions = [];
   const board = Array.from({ length: n }, () => Array(n).fill('.'));

   const isValid = (row, col) => {
	   for (let i = 0; i < row; i++) {
		   if (board[i][col] === 'Q') return false;
		   if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
		   if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
	   }
	   return true;
   };

   const solve = (row) => {
	   if (row === n) {
		   solutions.push(board.map(row => row.join('')));
		   return;
	   }
	   for (let col = 0; col < n; col++) {
		   if (isValid(row, col)) {
			   board[row][col] = 'Q';
			   solve(row + 1);
			   board[row][col] = '.';
		   }
	   }
   };

   solve(0);
   return solutions;
};

console.log(solveNQueens(5));