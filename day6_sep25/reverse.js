function isReverse(num) {
    var numStr = num.toString();
    var reversedStr = numStr.split('').reverse().join('');
    return ("reverse= ".concat(reversedStr, " "));
}
console.log(isReverse(1231));
