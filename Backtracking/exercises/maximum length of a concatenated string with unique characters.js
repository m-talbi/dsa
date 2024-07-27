// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/

const isUnique = (str) => {
    let mask = 0;
    let prev;

    for (let i = 0; i < str.length; i++) {
        prev = mask;
        mask |= 1 << (str[i].charCodeAt(0) - "a".charCodeAt(0));

        if (prev == mask) return false;
    }

    return true;
}

const maxLength = (arr) => {
    let max = 0;

    const search = (str = "", start = 0) => {
        if (isUnique(str) && str.length > max) {
            max = str.length;
        }

        for (let i = start; i < arr.length; i++) {
            search(str + arr[i], i + 1);
        }
    }

    search();
    return max;
};

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

function maxLength2(arr) {
    function backtrack(i, mask) {
        const nextMask = merge(arr[i], mask);
        if (!nextMask) return;
        count(nextMask);
        while (++i < arr.length) backtrack(i, nextMask);
    }
    function merge(str, seen) {
        for (let i = 0; i < str.length; i++) {
            const mask = 1 << str.charCodeAt(i) - 97;
            if (mask & seen) return false;
            seen |= mask;
        }
        return seen;
    }
    function count(num) {
        let ones = 0;
        while (num) {
            if (num & 1) ones++;
            num >>= 1;
        }
        max = Math.max(ones, max);
    }
    let max = 0, i = 0;
    while (i < arr.length) backtrack(i++, 0);
    return max;
}

const input1 = ["cha","r","act","ers"]
const input2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];

console.log(maxLength(input1));