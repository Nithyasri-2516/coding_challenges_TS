
// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

function merge_array(array1: number[], array2: number[]): number[] {
    const mergedArray = [...array1, ...array2]; 
    const uniqueArray: number[] = [];
    const elementTracker: { [key: number]: boolean } = {}; 

    for (let i = 0; i < mergedArray.length; i++) {
        const currentElement = mergedArray[i];
        if (!elementTracker[currentElement]) {
            uniqueArray.push(currentElement);
            elementTracker[currentElement] = true;
        }
    }

    return uniqueArray;
}


var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));  // Output: [1, 2, 3, 30]
