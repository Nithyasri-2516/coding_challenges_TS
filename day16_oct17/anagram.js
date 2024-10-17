//Write a function that checks if two strings are anagrams of each other.
function anagrams(str1, str2) {
    var val1 = str1.toLowerCase();
    var val2 = str2.toLowerCase();
    var sort1 = val1.split('').sort().join('');
    var sort2 = val2.split('').sort().join('');
    if (sort1 == sort2) {
        return "".concat(str1, " and ").concat(str2, " are anagrams");
    }
    else {
        return "".concat(str1, " and ").concat(str2, " are not anagrams");
    }
}
console.log(anagrams("listen", "silent"));
console.log(anagrams("nithu", "priyu"));
