// Write a program to count the total number of vowels or consonants in a string.

// Test Data :
// Input the string : Welcome to w3resource.com

// Expected Output :

// The total number of vowel in the string is : 9 
// The total number of consonant in the string is : 12

function countVowelsAndConsonants(str: string) {
    let vowelsCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z')) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                vowelsCount++;
            } 
        
            else {
                consonantCount++;
            }
        }
    }

    console.log(`The total number of vowels in the string is: ${vowelsCount}`);
    console.log(`The total number of consonants in the string is: ${consonantCount}`);
}

const inputStr = "Welcome to w3resource.com";
countVowelsAndConsonants(inputStr);

    
    
    