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