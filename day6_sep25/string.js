// Write a program to print the first letter of each word.
// In this problem, you have to write a simple program to read a string str entered by the user and print the first letter of each word in a string.
// For Example,
// Input: Enter str: Geeks for Geeks
// Output: G f G
function getFirstLetters(str) {
    return str.split(' ').map(function (word) { return word.charAt(0); }).join(' ');
}
console.log(getFirstLetters("nithu pandi abi "));
