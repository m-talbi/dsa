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

			const currentAsInt = Number(s.slice(start, i + 1));
			const prev = Number(history.at(-1));

			if (!history.length || prev - currentAsInt == 1) {
				history.push(currentAsInt);

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

var splitString3 = function (s) {
    const size = s.length;

    const isValid = (start, target) => {
        for (let index = start; index < size; index++) {
            const value = Number(s.slice(start, index + 1));

            if (target - value !== 1) continue;
            if (index === size - 1) return true;
            if (isValid(index + 1, value)) return true;
        }

        return false;
    };

    for (let index = 0; index < size; index++) {
        const value = Number(s.slice(0, index + 1));

        if (isValid(index + 1, value)) return true;
    }
    return false;
};

console.log(splitString("001"));