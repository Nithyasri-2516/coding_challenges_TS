var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeArrays(array1, array2) {
    var mergedArray = __spreadArray(__spreadArray([], array1, true), array2, true);
    mergedArray.sort(function (a, b) { return a - b; });
    return removeDuplicates(mergedArray);
}
function removeDuplicates(array) {
    var uniqueArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i === 0 || array[i] !== array[i - 1]) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
var array1 = [1, 3, 5, 7];
var array2 = [2, 3, 6, 8, 9];
var result = mergeArrays(array1, array2);
console.log(result);
