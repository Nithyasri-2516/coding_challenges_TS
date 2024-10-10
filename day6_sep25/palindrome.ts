function main() {
    const testNumber = 12321; 
    if (isPalindrome(testNumber)) {
        console.log(`${testNumber} is a palindrome.`);
    } else {
        console.log(`${testNumber} is not a palindrome.`);
    }
}
function isPalindrome(num: number): boolean {
    const numStr = num.toString(); 
    const reversedStr = numStr.split('').reverse().join(''); 
    return numStr === reversedStr; 
}
main();


function main1() {
    let string: string = "mom";
    if (palindrome(string)) {
        console.log(`${string} is a palindrome.`);
    } else {
        console.log(`${string} is not a palindrome.`);
    }
}
function palindrome(str: string): boolean {
    const reversed = str.split('').reverse().join(''); // Split, reverse, and join to reverse the string
    return str === reversed;
}

main1();
