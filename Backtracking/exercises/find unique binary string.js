// https://leetcode.com/problems/find-unique-binary-string/description/

const findDifferentBinaryString = (nums = [""]) => {
  const len = nums[0].length;
  const combs = new Set(nums);
  let anotherUniqueValue;

  const search = (comb = "", start = 0) => {
    if (start == len) {
      if (combs.has(comb)) return false;

      anotherUniqueValue = comb;
      return true;
    }

    for (let i = start; i < len; i++) {
      for (const el of ["0", "1"]) {
        if (search(comb + el, start + 1)) return true;
      }
    }
  }

  search();
  return anotherUniqueValue;
}

console.log(findDifferentBinaryString(["101", "111", "010", "011", "000", "001", "100"]));

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

var findDifferentBinaryString2 = function(nums) {
  return nums.map((s, i) => s[i] == 1 ? '0' : '1').join('');
};

console.log(findDifferentBinaryString2(["101", "111", "010"]));