// Write a program in C to get the largest element of an array using the function.
// Test Data :
// Input the number of elements to be stored in the array :5
// Input 5 elements in the array :[1,2,3,4,5]
//output: 5

function array(arr1:number[]): any{
    let sort=arr1.sort((a,b)=> a-b);
    console.log(sort);
    return sort[arr1.length-1];
}
console.log(array([25,11,35,65,20]));
