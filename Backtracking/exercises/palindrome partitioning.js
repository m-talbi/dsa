// https://leetcode.com/problems/palindrome-partitioning/description/

const checkPalindrome = (s, start, end) => {
  while (start <= end) {
    if (s[start++] != s[end--]) return false;
  }

  return true;
}

const solve = (s, index, subset, result) => {
  if (index == s.length) {
    result.push(subset.slice());
    return;
  }

  for (let i = index; i < s.length; i++) {
    if (checkPalindrome(s, index, i)) {
      subset.push(s.substring(index, i + 1));
      solve(s, i + 1, subset, result);
      subset.pop();
    }
  }
}

const partition = (s) => {
  const result = [];
  const subset = [];
  solve(s, 0, subset, result);
  return result;
}

console.log(partition("aab"));

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

var partition2 = function (s) {
  const ans = [];
  const candidate = [];

  // This function checks if a substring of 's' is palindromic
  const is_palindrome = (s, l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  const solve = (s, i = 0, previous = 0) => {
    if (i === s.length) {
      if (is_palindrome(s, previous, i)) {
        ans.push([...candidate]);
      }
      return
    }

    // At each step we have 2 possibilities

    // 1) Partition the string here and see where this leads us
    // Proceed if and only if the partition generates a palindromic substring
    if (is_palindrome(s, previous, i)) {
      candidate.push(s.substring(previous, i + 1));
      solve(s, i + 1, i + 1);
      candidate.pop();
    }

    // 2) Do NOT partition the string here and see where this leads us
    solve(s, i + 1, previous);
  }

  solve(s);
  return ans;
};
