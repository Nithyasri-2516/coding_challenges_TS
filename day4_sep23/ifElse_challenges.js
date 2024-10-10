//1.Write a  program to accept two integers and check whether they are equal or not.
var a = 23;
var b = 43;
if (a == b) {
    console.log("they are equal");
}
else {
    console.log("not equal");
}
//2. Write a C program to check whether a given number is even or odd.
/*
Test Data : 15
Expected Output :
15 is an odd integer
*/
var x = 8;
if (x % 2 != 0) {
    console.log(" ".concat(x, " is an odd number"));
}
else {
    console.log(" ".concat(x, " is a even number"));
}
//3. Write a C program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
var p = -90;
if (p > 0) {
    console.log("".concat(p, " is a positive integer"));
}
else if (p == 0) {
    console.log("".concat(p, " has zero value"));
}
else {
    console.log("".concat(p, " is a negative integer"));
}
//4. Write a C program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
var a1 = 10, b1 = 98, c1 = 9;
if (a1 > b1) {
    console.log("".concat(a1, " is greater"));
}
else if (b1 > c1) {
    console.log("".concat(b1, " is greater"));
}
else if (c1 > a1) {
    console.log("".concat(c1, " is greater"));
}
else {
    console.log("invalid");
}
