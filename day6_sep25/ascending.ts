// Write a program that reads an array of ints and outputs the length of the
// longest sequence in strictly ascending order. Print the elements of longest
// ascending sequence in an array Elements of the sequence must go one after
// another. A single number is assumed to be an ordered sequence with the length= 1.

// Enter the number of elements 
// 5
// Enter 5 numbers in any order to find the longest ascending sequence

// 45
// 40
// 0
// 39
// 10
// The max value is : 2
// 2numbers in ascending order
// 0 



let max=0;
function arr(array:number[]): number[]{
    const as: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            as.push(array[i-1],array[i]);
            max++;
        }
        else{
            let index;
            
        }
    }
    return as;
   
}
console.log(arr([45,40,0,39,10]));
console.log(`max value is ${max}`);


