const solve = (n, from = 0, to = 0, aux = 0) => {
    let count = 0;

    const helper = (n, from = 0, to = 0, aux = 0) => {
        if (n == 1) {
            console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
            count++;
            return;
        }

        helper(n - 1, from, aux, to);
        console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
        count++;
        helper(n - 1, aux, to, from);
    }

    helper(n, from, to, aux);
    return count;
}

console.log(solve(2, 1, 3, 2));