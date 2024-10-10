//Write a program ts to find the majority element of an array.
// input:1 3 3 7 4 3 2 3 3
// output: 3
function find(arr) {
    var frequency = {};
    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        }
        else {
            frequency[arr[i]] = 1;
        }
    }
    var maxCount = 0;
    var mostFrequent = arr[0];
    for (var key in frequency) {
        if (frequency[key] > maxCount) {
            maxCount = frequency[key];
            mostFrequent = Number(key);
        }
    }
    return mostFrequent;
}
var x = find([2, 3, 4, 2, 5, 6, 7, 8, 2, 2]);
console.log(x);
