const wordSearch = (board = [], word = "") => {
    const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));
    let result = false;

    const traverse = (row, col, current = "", index = 0) => {
        if (current == word) {
            result = true;
            return;
        }

        if (row < 0 || row == board.length) return;
        if (col < 0 || col == board[0].length) return;
        if (visited[row][col] == true) return;
        if (board[row][col] != word[index]) return;

        visited[row][col] = true;

        traverse(row + 1, col, current + word[index], index + 1);
        traverse(row - 1, col, current + word[index], index + 1);
        traverse(row, col + 1, current + word[index], index + 1);
        traverse(row, col - 1, current + word[index], index + 1);

        visited[row][col] = false;
    }

    const search = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                traverse(i, j);              
            }            
        }
    }

    search();
    return result;
}

const board = [
    ["A", "B", "C"],
    ["G", "B", "J"],
    ["A", "H", "X"]
]

console.log(wordSearch(board, "ABCB"));