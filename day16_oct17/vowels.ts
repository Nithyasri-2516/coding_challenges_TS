//Write a function that counts the number of vowels in a given string

function countVowels(input: string): any{
    let count=0,consonent=0
    let letter= input.toLowerCase()
    for(let word of letter)
    if(word=='a' || word=='e' || word=='i' || word=='o' || word=='u' ){
        count++
    }else{
        consonent++
    }
    return `countVowels=${count} count Consonent= ${consonent}`

}
console.log(countVowels("nithya"));
