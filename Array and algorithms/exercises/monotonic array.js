// https://leetcode.com/problems/monotonic-array/description/

/*
[Clarifying questions]
Is an empty array monotonic ? yes
Is an array with 1 element monotonic ? yes
*/

const input = [1, 3, 2]

const isMonotonic = (_arr = []) => {
  let isDecreasing = false;
  let isIncreasing = false;
  let monotony = 0;

  for (let i = 0; (i < _arr.length - 1) && !(isIncreasing && isDecreasing); i++) {
    monotony = _arr[i + 1] - _arr[i];

    if (monotony > 0) {
      isIncreasing = true;
    } else if (monotony < 0) {
      isDecreasing = true
    }
  }

  return !(isIncreasing && isDecreasing)
}

console.log(isMonotonic(input));