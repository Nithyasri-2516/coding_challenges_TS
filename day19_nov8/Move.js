var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function moveZeroesToEnd(arr) {
    var zeroCount = 0;
    var result = arr.filter(function (num) {
        if (num === 0) {
            zeroCount++;
            return false;
        }
        return true;
    });
    return __spreadArray(__spreadArray([], result, true), new Array(zeroCount).fill(0), true);
}
var arrayWithZeroes = [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(arrayWithZeroes)); // Output: [1, 3, 12, 0, 0]
