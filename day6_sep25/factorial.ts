// Input

// Input any number: 5
// Output

// Factorial of 5 = 120


function factorial(n: number): number {
    if (n < 0) {
        throw new Error("error");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1); 
}
console.log(factorial(5));

