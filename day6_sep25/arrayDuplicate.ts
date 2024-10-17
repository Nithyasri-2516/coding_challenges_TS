// Write a Program to remove duplicates from the Sorted array.
// In this problem, you have to write a program that takes a sorted array arr[] of size N from the user and removes the duplicate elements from the array.

// For Example,

// Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}

// Output: array after removal of duplicates: 1 2 3 4 5


function removeDuplicates(array: number[]): number[] {
    const uniqueArray: number[] = [];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] != array[i - 1]) {  
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));


