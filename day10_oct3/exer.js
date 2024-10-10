// Write a JavaScript function that merges two arrays and removes all duplicate elements.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]
function merge_array(array1, array2) {
    var mergedArray = __spreadArray(__spreadArray([], array1, true), array2, true);
    var uniqueArray = [];
    var elementTracker = {};
    for (var i = 0; i < mergedArray.length; i++) {
        var currentElement = mergedArray[i];
        if (!elementTracker[currentElement]) {
            uniqueArray.push(currentElement);
            elementTracker[currentElement] = true;
        }
    }
    return uniqueArray;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2)); // Output: [1, 2, 3, 30]
