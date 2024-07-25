// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/description/

// 1. iterate through the string, read every number until you reach a number higher than 0
// 2. once you got the number recurse with that number as an arg (prev)
// 3. if (prev) is not undefined, we compare it with the new number
// 4. if comparison results in 0, we push prev to an array
// 5. repeat starting from the index of the second number

const splitString = (s = "") => {
	const history = [];

	const search = (start = 0) => {
		if (start == s.length) return true;

		for (let i = start; i < s.length; i++) {

			const current = s.slice(start, i + 1);
			const currentAsInt = Number(current);
			const prev = Number(history.at(-1));

			if (!history.length || prev - currentAsInt == 1) {
				history.push(current);

				if (search(i + 1)) return true;

				history.pop();
				continue;
			}

			if (prev < currentAsInt) {
				return false;
			}
		}
	}

	return search() && history.length != 1;
};

/*
#######################################################################################################################################
##################################################### SOLUTION 2 ######################################################################
#######################################################################################################################################
*/

f = (v, s) => !s || (!(s = s.replace(/^0+/, '')) && !v) || s.startsWith(v) && f(v - 1, s.replace(v, ''))

const splitString2 = s => {

	for (let i = 0, v = 0; i < s.length; i++) {
		v = Number(s[i]) + 10 * v
		if (s[i + 1] && f(v - 1, s.slice(i + 1))) return true
	}
	return false
}

/*
#######################################################################################################################################
##################################################### SOLUTION 3 ######################################################################
#######################################################################################################################################
*/

console.log(splitString2("00000589548000158900058954800015889"));