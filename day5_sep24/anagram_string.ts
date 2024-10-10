// Write a program to check whether two given strings are an anagram.
// Test Data :
// Input the first String : spare
// Input the second String : pears
// Expected Output :

//  spare and pears are Anagram.


function anagram(x: string, y: string): string {
    if (x.length !== y.length) {
        return `${x} and ${y} are not Anagrams`;
    }
    let sortedX = x.split('').sort().join('');
    let sortedY = y.split('').sort().join('');
    if (sortedX === sortedY) {
        return `${x} and ${y} are Anagrams`;
    } else {
        return `${x} and ${y} are not Anagrams`;
    }
}
console.log(anagram("spare", "pears"));
console.log(anagram("nithu","priyu"));
