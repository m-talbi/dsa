function solve(arr) {
    const result = [];
    permute(arr, 0, arr.length, result);
    return result;
}

function isValid(state, perm) {
    return state.length == perm;
}

function permute(state, start, end, result) {
    if (isValid(state, start, end)) {
        result.push(structuredClone(state));
        return;
    }

    for (let i = start; i < end; i++) {
        [state[start], state[i]] = [state[i], state[start]]; // new candidate
        permute(state, start + 1, end, result);
        [state[start], state[i]] = [state[i], state[start]]; // backtrack
    }
}

console.log(solve([2, 5, 1, 8]));