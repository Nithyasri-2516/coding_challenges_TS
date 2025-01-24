// Maximum Consecutive Ones
// Problem:
// Given a binary array, find the maximum number of consecutive 1s in the array.
// Example 1:
// Input: nums = [1, 1, 0, 1, 1, 1]
// Output: 3
// Example 2:
// Input: nums = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1]
// Output: 4
function Max(nums) {
    var maxCount = 0;
    var currentCount = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        }
        else {
            currentCount = 0;
        }
    }
    return maxCount;
}
console.log(Max([1, 1, 0, 1, 1, 1]));
console.log(Max([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1]));
