// 1346. Check If N and Its Double Exist
// Easy
// Topics
// Companies
// Hint
// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
function checkIfExist(arr) {
    var seen = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        // seen.add(num);
    }
    return false;
}
console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
