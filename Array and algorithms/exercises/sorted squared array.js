// https://leetcode.com/problems/squares-of-a-sorted-array/description/

const input1 = [-9, -6, 0, 7, 8, 10, 11]
const input2 = [0, 8, 10, 11]
const input3 = [-5,-3,-2,-1]

/*
[Clarifying questions]
- Are all numbers positive ?
- Are all integers distinct (no duplicates) ?
- Can empty array be given as an input ?
*/

const sortSquaredArray = (_arr = []) => {
  const result = Array(_arr.length).fill(0);
  
  let left = 0;
  let right = _arr.length - 1;
  let j = _arr.length;

  while (right >= left) {
    if (Math.abs(_arr[right]) > Math.abs(_arr[left])) {
      result[--j] = Math.pow(_arr[right--], 2);
    } else {
      result[--j] = Math.pow(_arr[left++], 2);
    }
  }

  return result;
}

console.log(sortSquaredArray(input2));