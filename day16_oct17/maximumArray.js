//Find the Maximum Number in an Array(Write a function that takes an array of numbers and returns the 
//maximum number.
// function maximum( arr: number[]): any{
//     let max=0;
//    for(let i=0;i<arr.length;i++){
//      for(let j=i+1;j<arr.length;j++){
//      if(arr[i]>=arr[j])   //50>30
//      {
//         max=arr[i]
//      }
//    }}
//    return max
// }
// console.log(maximum([10,30,20]))
// let a=[10,20,30,45]
// let max:number[]=[]
// for(let i=0;i<a.length;i++){
//     if(a[0]<a[i]){
//         max.push(a[i])
//     }
//     console.log(max)
// }
// let a:number[]=[20,19,90,30,50]
// let r= a.sort()
// let max= a[r.length-1]
// // let value= max.valueOf()
// console.log(max)
function large(a) {
    var r = a.sort();
    var max = a[r.length - 1];
    return max;
}
console.log(large([10, 90, 89]));
function small(a) {
    var r = a.sort();
    var min = a[r.indexOf(0)];
    return min;
}
console.log(small([10, 90, 89]));
