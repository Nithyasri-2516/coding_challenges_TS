// Write a program to check whether two given strings are an anagram.
// Test Data :
// Input the first String : spare
// Input the second String : pears
// Expected Output :
//  spare and pears are Anagram.
function anagram(x, y) {
    if (x.length !== y.length) {
        return "".concat(x, " and ").concat(y, " are not Anagrams");
    }
    var sortedX = x.split('').sort().join('');//aeprs
    var sortedY = y.split('').sort().join('');//aeprs
    if (sortedX === sortedY) {
        return "".concat(x, " and ").concat(y, " are Anagrams");
    }
    else {
        return "".concat(x, " and ").concat(y, " are not Anagrams");
    }
}
console.log(anagram("spare", "pears"));
console.log(anagram("nithu", "priyu"));
