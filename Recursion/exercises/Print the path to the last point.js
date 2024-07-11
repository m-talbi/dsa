const map = [
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 2],
]

const findPath = (map = [], n = 0, k = 0) => {
    // handle coordinates out of bound
    if (n == map.length || k == map.length) return;

    // handle blocked path
    if (map[n][k] == 1) return 1;

    console.log(`Traversing ${n}:${k}`);
    
    if (map[n][k] == 2) {
        console.log(`Reached destination`);
        return;
    }

    let prevK;
    let prevN;

    if (n > k) {
        prevK = findPath(map, n, k + 1);
    } else {
        prevN = findPath(map, n + 1, k)
    }

    if (prevK == 1) {
        findPath(map, n + 1, k - 1);
    }

    if (prevN == 1) {
        findPath(map, n - 1, k + 1);
    }
}

findPath(map)