/*

Input a string which contains some palindrome substrings. 
Find out the position of palindrome substrings if exist and replace it by *. 
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.

*/

const input = "bob has a radar plane";
const result = replacePalindromes(input);
console.log(result);
function repeatString(str: string, num: number): string {
    return Array(num + 1).join(str);
}
function replacePalindromes(input: string): string {
    return input.split(' ').map(word => {
        const c = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        return c === c.split('').reverse().join('') && c.length > 1 ? repeatString('*', word.length): word;
    }).join(' ');
}
