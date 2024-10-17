//Write a function that counts the number of vowels in a given string
function countVowels(input) {
    var count = 0;
    var letter = input.toLowerCase();
    for (var _i = 0, letter_1 = letter; _i < letter_1.length; _i++) {
        var word = letter_1[_i];
        if (word == 'a' || word == 'e' || word == 'i' || word == 'o' || word == 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowels("nithyaaa"));
