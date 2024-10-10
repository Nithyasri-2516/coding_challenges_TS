// Write a program to check Armstrong and Perfect numbers using the function.
// Test Data :
// Input any number: 371
// Expected Output :

//  The 371 is an Armstrong number.                                                 
//  The 371 is not a Perfect number.  


function isArmstrongNumber(num: number): boolean {
    const digits = num.toString().split(''); // 3 7 1
    const length = digits.length;             //3
    let sum = 0;
    for (const digit of digits) { //3 7  1
        sum += Math.pow(Number(digit), length);  //(3,3) +(7,3)+  (1,3)=> 27+ 343+ 1= 371
    }
    return sum === num;  //371==371
    
}
const inputNumber = 371; 
if (isArmstrongNumber(inputNumber)) {
    console.log(`${inputNumber} is an Armstrong number.`);
} else {
    console.log(`${inputNumber} is not an Armstrong number.`);
}
