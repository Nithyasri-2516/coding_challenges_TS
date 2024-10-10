// 3. Write a program in C to swap two numbers using a function.
// Test Data :
// Input 1st number : 2
// Input 2nd number : 4
// Expected Output : 
// Before swapping: n1 = 2, n2 = 4                                                  
// After swapping: n1 = 4, n2 = 2 

let n1: number = 2;
let n2: number = 4;
function swap(n1:number,n2:number):[number,number]{
    return[n2,n1];
}
[n1, n2] = swap(n1, n2);
console.log(`After swapping: n1 = ${n1}, n2 = ${n2}`);



// a=2, b=4,  t=a+b=6
// a=t-b;   b=t-a
function swapping(a:number, b:number):any{
        a=a+b;
        b=a-b;
        a=a-b;
        return [a,b];
}

console.log(swapping(8,9));


