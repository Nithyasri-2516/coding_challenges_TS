// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
var compare;
compare = function (a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
};
console.log(compare('2', 2)); //false
console.log(compare(2, 2)); //true
