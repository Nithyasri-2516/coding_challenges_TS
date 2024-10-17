//Write a function that counts the number of vowels in a given string

function countVowels(input: string): any{
    let count=0
    let letter= input.toLowerCase()
    for(let word of letter)
    if(word=='a' || word=='e' || word=='i' || word=='o' || word=='u' ){
        count++
    }
    return count

}
console.log(countVowels("nithyaaa"));
