function mergeArrays(array1: number[], array2: number[]): number[] {

    const mergedArray = [...array1, ...array2];
    mergedArray.sort((a, b) => a - b);
    return removeDuplicates(mergedArray);
}

function removeDuplicates(array: number[]): number[] {
    const uniqueArray: number[] = [];
    for (let i = 0; i < array.length; i++) {    
        if (i === 0 || array[i] !== array[i - 1]) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 3, 6, 8, 9];
const result = mergeArrays(array1, array2);

console.log(result);
