// Write a C program to find the maximum and minimum of some values using a function that returns an array.
// Test Data :
// Input 5 values
// 25
// 11
// 35
// 65
// 20
// Expected Output :
// Number of values you want to input: Input 5 values
// Minimum value is: 11
// Maximum value is: 65  
// let arr1: number[]= [25,11,35,65,20];
// let sort=arr1.sort((a,b)=> a-b);
// console.log(sort);
// console.log(sort[0]);
// console.log(sort[arr1.length-1]);
function array(arr1) {
    var sort = arr1.sort(function (a, b) { return a - b; });
    console.log(sort);
    return [sort[0], sort[arr1.length - 1]];
}
console.log(array([25, 11, 35, 65, 20]));
