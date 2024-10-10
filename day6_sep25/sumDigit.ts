// Input

// Input number: 1234
// Output

// Sum of digits: 10

 
 function sum(num: number): number {
    let total = 0; 
    const digits = num.toString(); 
    for (const n of digits) {
        total += Number(n); 
    }
    return total; 
}
console.log(`Sum of digits: ${sum(134)}`); 