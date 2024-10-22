//Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the 
//maximum number.
// function findMax(array) {
//     let max = array[0]; 
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]; 
//         }
//     }
//     return max;
// }
// const numbers = [10, 20, 30, 60];
// console.log(findMax(numbers)); 
// let a=[10,20,30,45]
// let max:number[]=[]
// for(let i=0;i<a.length;i++){
//     if(a[0]<a[i]){
//         max.push(a[i])
//     }
//     console.log(max)
// }
// let a:number[]=[20,19,90,30,50]
// let r= a.sort()   //19,20,30,50,90 
// let max= a[r.length-1]   //90
// console.log(max)
// function large(a:number[]){
//     let r= a.sort()
//     let max= a[r.length-1]
//      return max
// }
// console.log(large([10,90,89]))
var a = [20, 209, 90, 30];
var s = a.sort(function (x, y) { return x - y; });
var max = a[s.length - 1]; //90
console.log(max);
