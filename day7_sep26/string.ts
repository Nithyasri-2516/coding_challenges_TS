//Write a program  to count the total number of alphabets, digits and special characters in a string.

// Test Data :
// Input the string : Welcome to w3resource.com

// Expected Output :

// Number of Alphabets in the string is : 21 
// Number of Digits in the string is : 1 
// Number of Special characters in the string is : 4 



function countCharacters(str: string) {
    let alphabetCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            alphabetCount++;
        } 
   
        else if (char >= '0' && char <= '9') {
            digitCount++;
        } 
       
        else if (char !== "") {
            specialCharCount++;
        }
    }

    console.log(`Number of Alphabets in the string is: ${alphabetCount}`);
    console.log(`Number of Digits in the string is: ${digitCount}`);
    console.log(`Number of Special characters in the string is: ${specialCharCount}`);
}


const inputStr = "Welcome to w3resource@com";
countCharacters(inputStr);
