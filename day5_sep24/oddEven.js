// 4. Write a program in C to check if a given number is even or odd using the function.
// Test Data :
// Input any number : 5
// Expected Output :
//  The entered number is odd. 
function oddEven(a) {
    if (a % 2 == 0) {
        return "the entered number is even";
    }
    else {
        return "the entered number is odd";
    }
}
console.log(oddEven(10));
