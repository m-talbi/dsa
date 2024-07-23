const wordSearch = (board = [], word = "") => {
    const traverse = (row, col, current = "", index = 0) => {
        if (current == word) {
            return true;
        }

        if (row < 0 || row == board.length) return;
        if (col < 0 || col == board[0].length) return;
        if (board[row][col] == ".") return;
        if (board[row][col] != word[index]) return;

        let temp = board[row][col];
        board[row][col] = ".";

        const up = traverse(row + 1, col, current + word[index], index + 1);
        const down = traverse(row - 1, col, current + word[index], index + 1);
        const right = traverse(row, col + 1, current + word[index], index + 1);
        const left = traverse(row, col - 1, current + word[index], index + 1);

        board[row][col] = temp;

        return up || down || right || left;
    }

    const search = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (traverse(i, j)) return true;
            }            
        }

        return false;
    }

    return search();
}

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

var exist = function(board, word) {
    // m = rows, n = cols
    const m = board.length;
    const n = board[0].length;
    if (!isValidByCharcount(board, word)) return false;

    const visited = Array(m).fill().map(x => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(board, word, i, j, 0, visited)) return true;
        }
    }

    return false;

};

function isValidByCharcount(board, word) {
    const counter = new Map();

    // Count letters on board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const cell = board[i][j];
            if (!counter.has(cell)) counter.set(cell, 0);
            counter.set(cell, counter.get(cell)+1)
        }
    }
    
    // Check if enough letters available to create word
    for (const char of word) {
        if (!counter.has(char)) return false;
        let count = counter.get(char);
        if (count === 0) return false;
        counter.set(char, count-1);
    }
    return true;
}

function dfs(board, word, row, col, i, visited) {
    if (i === word.length) return true;
    const outOfBounds = (row < 0 || row >= board.length) || (col < 0 || col >= board[0].length);
    if (outOfBounds || visited[row][col]) return false;
    if (board[row][col] !== word[i]) return false;
    visited[row][col] = true;

    const left = dfs(board, word, row, col - 1, i + 1, visited);
    const right = dfs(board, word, row, col + 1, i + 1, visited);
    const up = dfs(board, word, row - 1, col, i + 1, visited);
    const down = dfs(board, word, row + 1, col, i + 1, visited);

    visited[row][col] = false;
    return left || right || up || down;
}

/*
#######################################################################################################################################
##################################################### SOLUTION 3 ######################################################################
#######################################################################################################################################
*/

var exist2 = function(board, word) {
    return isValidByAvailableSymbols(board, word) && isValidForSegmentsOfWord(board, word)
        ? checkPhrase(board, word)
        : false;
};

const isValidByAvailableSymbols = (board, word) => {
    let wordCounter = {};

    for (let i = 0; i < board.length; i ++) {
        for (let j = 0; j < board[i].length; j ++) {
            wordCounter[board[i][j]] = (wordCounter[board[i][j]] || 0) + 1;
        }
    }

    for (let i = 0; i < word.length; i ++) {
        if (wordCounter[word[i]] !== undefined && wordCounter[word[i]] >= 0) {
            wordCounter[word[i]] --;
        } else {
            return false;
        }
    }

    return true;
};

const isValidForSegmentsOfWord = (board, word) => {
    const thirdLength = Math.floor(word.length / 3);
    const twoThirdLength = Math.floor(word.length * 2 / 3);

    if (word.length > 5) {
        const firstSegment = word.substring(0, thirdLength);
        const secondSegment = word.substring(thirdLength, twoThirdLength);
        const thirdSegment = word.substring(twoThirdLength);

        if (!checkPhrase(clone(board), firstSegment) || 
            !checkPhrase(clone(board), secondSegment) || 
            !checkPhrase(clone(board), thirdSegment)) {
            return false;
        }
    }

    return true;
}

const checkPhrase = (board, word) => {
    for (let i = 0; i < board.length; i ++) {
        for (let j = 0; j < board[i].length; j ++) {
            if (dfs(board, word, i, j)) {
                return true;
            }
        }
    }

    return false;
};

const clone = (a) => JSON.parse(JSON.stringify(a));

const directionMap = [0, 1, 0, -1, 0];
const dfs = (board, word, i, j, cursor = 0) => {
    // when cursor reaches the length of the word, it means
    // that the script handled whole word in the previous step and the result is true
    if (cursor === word.length) {
        return true;
    }

    // reached the edge of the board or already handled symbol
    if (board[i]?.[j] !== word[cursor] || board[i][j] === -1) {
        return false;
    }

    // mark as visited
    board[i][j] = -1;

    // handle the neighbours
    for (let k = 0; k < 4; k ++) {
        if (dfs(board, word, i + directionMap[k], j + directionMap[k + 1], cursor + 1)) {
            return true;
        }
    }

    board[i][j] = word[cursor];

    return false;
};

const board = [
    ["A", "B", "C"],
    ["G", "B", "J"],
    ["A", "H", "X"]
]

console.log(wordSearch(board, "ABCB"));