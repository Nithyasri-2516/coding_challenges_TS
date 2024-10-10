function main() {
    var testNumber = 12321;
    if (isPalindrome(testNumber)) {
        console.log("".concat(testNumber, " is a palindrome."));
    }
    else {
        console.log("".concat(testNumber, " is not a palindrome."));
    }
}
function isPalindrome(num) {
    var numStr = num.toString();
    var reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}
main();
