const solution = (str = "") => {
    const patternsSplitted = str.split(")");
    let result = "";

    for (let i = 0; i < patternsSplitted.length - 1; i++) {
        const multiplyBy = patternsSplitted[i][0];
        const pattern = patternsSplitted[i].slice(2);

        for (let j = 0; j < multiplyBy; j++) {
            result += pattern;
        }
    }

    result += patternsSplitted.at(-1);

    return result;
}

console.log(solution("2(ab)3(c)kkk"));