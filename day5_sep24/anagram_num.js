//Write a program to check whether two given numbers are an anagram.
// Test Data :
// Input the first String : 1234
// Input the second String : 3421
// Expected Output :
//  1234 and 3421 are Anagram.
function anagramNumber(x, y) {
    var a = x.toString();
    var b = y.toString();
    if (a.length !== b.length) {
        return "".concat(x, " and ").concat(y, " are not Anagrams");
    }
    var sortedX = a.split('').sort().join('');
    var sortedY = b.split('').sort().join('');
    if (sortedX === sortedY) {
        return "".concat(x, " and ").concat(y, " are Anagrams");
    }
    else {
        return "".concat(x, " and ").concat(y, " are not Anagrams");
    }
}
console.log(anagramNumber(1234, 3421));
console.log(anagramNumber(2344, 8734));
