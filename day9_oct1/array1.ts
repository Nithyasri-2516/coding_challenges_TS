// Write a typescript program that accepts a string as input and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.



function swapCase(str: string): string {
    let swappedStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase(); // Convert to lowercase
        } 
        // Check if the character is lowercase
        else if (char === char.toLowerCase()) {
            swappedStr += char.toUpperCase(); // Convert to uppercase
        } 
        // If the character is not alphabetic, just add it as is
        else {
            swappedStr += char;
        }
    }

    return swappedStr;
}

// Test Data
console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'
