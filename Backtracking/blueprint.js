function solve(arr) {
    const result = [];
    const state =  [];
    permute(arr, state, result, arr.length);
    return result;
}

function isValid(state, perm) {
    return state.length == perm;
}

function has_value(arr, value) {
    const len_state = arr.length;

    for (let j = 0; j < len_state; j++) {
        if (arr[j] == value) return true;            
    }

    return false;
}

function getChoices(arr, state) {
    const len_arr = arr.length;
    const perms = []

    for (let i = 0; i < len_arr; i++) {
        if (!has_value(state, arr[i])) {
            perms.push(arr[i]);
        }
    }

    return perms;
}

function permute(arr, state, result, perm) {
    if (isValid(state, perm)) {
        result.push(structuredClone(state));
        return;
    }

    for (const choice of getChoices(arr, state)) {
        state.push(choice);
        permute(arr, state, result, perm);
        state.pop(choice);
    }
}

console.log(solve([2, 5, 1, 8]));