//Write a program to check whether two given numbers are an anagram.
// Test Data :
// Input the first String : 1234
// Input the second String : 3421
// Expected Output :

//  1234 and 3421 are Anagram.


function anagramNumber(x:number, y: number): any{
    var a=x.toString(); "1234"
    var b=y.toString();  
    if (a.length !== b.length) {
        return `${x} and ${y} are not Anagrams`;
    }
    let sortedX = a.split('').sort().join('');
    let sortedY = b.split('').sort().join('');
    if (sortedX === sortedY) {
        return `${x} and ${y} are Anagrams`;
    } else {
        return `${x} and ${y} are not Anagrams`;
    }
}
console.log(anagramNumber(1234,3421));
console.log(anagramNumber(2344,8734));
