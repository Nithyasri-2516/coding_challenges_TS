function longestAscendingSequence(arr) {
    var maxLen = 1, currLen = 1, startIdx = 0, maxStartIdx = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1])
            currLen++;
        else {
            if (currLen > maxLen) {
                maxLen = currLen;
                maxStartIdx = startIdx;
            }
            currLen = 1;
            startIdx = i;
        }
    }
    if (currLen > maxLen) {
        maxLen = currLen;
        maxStartIdx = startIdx;
    }
    return { maxLen: maxLen, sequence: arr.slice(maxStartIdx, maxStartIdx + maxLen) };
}
var arr = [1, 2, 3, 4, 1];
var _a = longestAscendingSequence(arr), maxLen = _a.maxLen, sequence = _a.sequence;
console.log("The max value is: ".concat(maxLen, "\n").concat(maxLen, " numbers in ascending order\n").concat(sequence.join(" ")));
