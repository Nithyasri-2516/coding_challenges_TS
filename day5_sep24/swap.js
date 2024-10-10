// 3. Write a program in C to swap two numbers using a function.
// Test Data :
// Input 1st number : 2
// Input 2nd number : 4
// Expected Output : 
// Before swapping: n1 = 2, n2 = 4                                                  
// After swapping: n1 = 4, n2 = 2 
var _a;
var n1 = 2;
var n2 = 4;
function swap(n1, n2) {
    return [n2, n1];
}
_a = swap(n1, n2), n1 = _a[0], n2 = _a[1];
console.log("After swapping: n1 = ".concat(n1, ", n2 = ").concat(n2));
// a=2, b=4,  t=a+b=6
// a=t-b;   b=t-a
function swapping(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapping(8, 9));
