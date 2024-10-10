/*

Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by *.
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.

*/
var input = "bob has a radar plane";
var result = replacePalindromes(input);
console.log(result);
function repeatString(str, num) {
    return Array(num + 1).join(str);
}
function replacePalindromes(input) {
    return input.split(' ').map(function (word) {
        var c = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        return c === c.split('').reverse().join('') && c.length > 1 ? repeatString('*', word.length) : word;
    }).join(' ');
}
