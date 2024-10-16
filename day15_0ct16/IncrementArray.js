// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
function array(arr) {
    var a = arr.join('');
    var store = Number(a) + 1; //used to convert a string into number
    var s = store.toString().split('').map(Number); // array[string]---- array[number]
    return s;
}
console.log(array([1, 2, 3])); // Output: [1, 2, 4] (last element is incremented)
console.log(array([9])); // Output: [1, 0] (9 is found)
console.log(array([5, 6, 9])); // Output: [1, 0] (9 is found)
console.log(array([2, 9, 9, 9])); // Output: [7, 9] (last element is incremented)
// for (let n of arr) {
//     if (n === 9) {
//         return [1, 0];
//     } else {
//         arr[arr.length - 1] += 1;
//         // Return the modified array
//         return arr; 
//     }
// }
// return [];
