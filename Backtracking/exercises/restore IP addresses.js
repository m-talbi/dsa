// https://leetcode.com/problems/restore-ip-addresses/description/

const restoreIp = (ip) => {
  const subset = [];
  const result = [];

  const isValidIpSegment = (ipSegment, index) => {
    const ipAsInt = Number(ipSegment);
    const numsLeft = ip.length - index

    if (ipSegment[0] == "0" || (ipAsInt > 255 || ipAsInt < 0)) return false;
    if (numsLeft < (4 - subset.length) || numsLeft > (4 - subset.length) * 3) return false;

    return true;
  }

  const search = (start = 0) => {
    if (subset.length == 4 && start == ip.length) {
      result.push(subset.join("."));
      return;
    }

    for (let i = start; i < ip.length; i++) {
      const segment = ip.slice(start, i + 1);

      if (segment.length > 3) return;

      if (isValidIpSegment(segment, i)) {
        subset.push(segment);
        search(i + 1);
        subset.pop();
      }
    }
  }

  search();
  return result;
}

console.log(restoreIp("101023"));

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

const map = {
  '4': [
      [1, 1, 1, 1]
    ],
  '5': [
      [2, 1, 1, 1],
      [1, 2, 1, 1],
      [1, 1, 2, 1],
      [1, 1, 1, 2],
    ],
  '6': [
      [3, 1, 1, 1],
      [1, 3, 1, 1],
      [1, 1, 3, 1],
      [1, 1, 1, 3],
      [2, 2, 1, 1],
      [2, 1, 2, 1],
      [2, 1, 1, 2],
      [1, 2, 2, 1],
      [1, 2, 1, 2],
      [1, 1, 2, 2],
    ],
  '7': [
      [3, 2, 1, 1],
      [3, 1, 2, 1],
      [3, 1, 1, 2],
      [2, 3, 1, 1],
      [2, 1, 3, 1],
      [2, 1, 1, 3],
      [1, 2, 3, 1],
      [1, 2, 1, 3],
      [1, 3, 2, 1],
      [1, 3, 1, 2],
      [1, 1, 3, 2],
      [1, 1, 2, 3],
      [2, 2, 2, 1],
      [2, 2, 1, 2],
      [2, 1, 2, 2],
      [1, 2, 2, 2],
    ],
  '8': [
      [2, 2, 2, 2],
      [3, 3, 1, 1],
      [3, 1, 3, 1],
      [3, 1, 1, 3],
      [1, 3, 3, 1],
      [1, 1, 3, 3],
      [1, 3, 1, 3],
      [3, 1, 2, 2],
      [3, 2, 1, 2],
      [3, 2, 2, 1],
      [1, 3, 2, 2],
      [1, 2, 3, 2],
      [1, 2, 2, 3],
      [2, 1, 2, 3],
      [2, 1, 3, 2],
      [2, 2, 1, 3],
      [2, 2, 3, 1],
      [2, 3, 2, 1],
      [2, 3, 1, 2],
    ],
  '9': [
      [3, 3, 2, 1],
      [3, 3, 1, 2],
      [3, 2, 3, 1],
      [3, 2, 1, 3],
      [3, 1, 2, 3],
      [3, 1, 3, 2],
      [1, 2, 3, 3],
      [1, 3, 2, 3],
      [1, 3, 3, 2],
      [2, 3, 3, 1],
      [2, 3, 1, 3],
      [2, 1, 3, 3],
      [2, 3, 2, 2],
      [3, 2, 2, 2],
      [2, 2, 3, 2],
      [2, 2, 2, 3],
    ],
  '10': [
      [3, 3, 3, 1],
      [3, 3, 1, 3],
      [3, 1, 3, 3],
      [1, 3, 3, 3],
      [3, 3, 2, 2],
      [3, 2, 3, 2],
      [3, 2, 2, 3],
      [2, 2, 3, 3],
      [2, 3, 2, 3],
      [2, 3, 3, 2],
    ],
  '11': [
      [3, 3, 3, 2],
      [3, 3, 2, 3],
      [3, 2, 3, 3],
      [2, 3, 3, 3],
    ],
  '12': [
      [3, 3, 3, 3]
    ],
}


var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) {
      return []
    }
    const checkSet = map[`${s.length}`]
    const result = []

    const isValidSection = (str) => {
      if (str[0] === '0' && str.length > 1) {
        return false
      }

      if (Number(str) > 255) {
        return false
      }

      return true
    }
    
    for (let set of checkSet) {
      let i = 0

      const num1 = set[0]
      const str1 = s.substring(i, i + num1)
      if (!isValidSection(str1)) {
        continue
      }

      i += num1
      const num2 = set[1]
      const str2 = s.substring(i, i + num2)
      if (!isValidSection(str2)) {
        continue
      }

      i += num2
      const num3 = set[2]
      const str3 = s.substring(i, i + num3)
      if (!isValidSection(str3)) {
        continue
      }

      i += num3
      const num4 = set[3]
      const str4 = s.substring(i, i + num4)
      if (!isValidSection(str4)) {
        continue
      }

      result.push(`${str1}.${str2}.${str3}.${str4}`)
    }

    return result
};