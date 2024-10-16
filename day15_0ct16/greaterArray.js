function array(arr, num) {
    var store = []; // Initialize store as an array to collect numbers
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        if (n > num) {
            store.push(n);
        }
    }
    return store;
}
console.log(array([1, 2, 3, 5, 6, 8, 9], 6));
