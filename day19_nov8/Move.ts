function moveZeroesToEnd(arr: number[]): number[] {
    let zeroCount = 0;
    const result = arr.filter(num => {
        if (num === 0) {
            zeroCount++;
            return false;
        }
        return true;
    });
    return [...result, ...new Array(zeroCount).fill(0)];
}

const arrayWithZeroes = [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(arrayWithZeroes)); // Output: [1, 3, 12, 0, 0]
