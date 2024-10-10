// Input
// Input number: 1234
// Output
// Sum of digits: 10
function sum(num) {
    var total = 0;
    var digits = num.toString();
    for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
        var n = digits_1[_i];
        total += Number(n);
    }
    return total;
}
console.log("Sum of digits: ".concat(sum(134)));
