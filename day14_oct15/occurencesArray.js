function occurences(arr, target) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        if (n === target) {
            count++;
        }
    }
    return count;
}
console.log(occurences([1, 2, 3, 4, 1, 1], 1));
