// Write a program to check Armstrong and Perfect numbers using the function.
// Test Data :
// Input any number: 371
// Expected Output :
//  The 371 is an Armstrong number.                                                 
//  The 371 is not a Perfect number.  
function isArmstrongNumber(num) {
    var digits = num.toString().split('');
    var length = digits.length;
    var sum = 0;
    for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
        var digit = digits_1[_i];
        sum += Math.pow(Number(digit), length);
    }
    return sum === num;
}
var inputNumber = 371;
if (isArmstrongNumber(inputNumber)) {
    console.log("".concat(inputNumber, " is an Armstrong number."));
}
else {
    console.log("".concat(inputNumber, " is not an Armstrong number."));
}
