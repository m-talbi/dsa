// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const letterCombinations = (digits) => {
  const result = [];

  const letters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }

  if (digits.length == 1) return letters[digits[0]].split("");
  if (digits.length == 0) return [];

  const search = (index = 0, current = "") => {
    if (index == digits.length) {
      result.push(current);
      return;
    }

    const key = digits[index];

    for (let i = 0; i < letters[key].length; i++) {
      search(index + 1, current + letters[key][i]);
    }
  }

  search();
  return result;
}

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

const keyboard = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}
var letterCombinations2 = function (digits) {
  if (digits.length === 0) return []
  if (digits.length === 1) return keyboard[digits].split('')

  const result = []
  const digistArr = digits.split('').map(el => keyboard[el])

  const btr = (idx = 0, res = '') => {
      const letters = digistArr[idx]
      for (let i = 0; i < letters.length; i++) {
          if (idx === digistArr.length - 1) {
              result.push(res + letters[i])
          } else {
              btr(idx + 1, res + letters[i])
          }
      }
  }
  btr()

  return result
};

console.log(letterCombinations("34"));