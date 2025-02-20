// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Easy
// Topics
// Companies
// Hint
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.
// Example 1:
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
// Example 2:
// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
// Example 3:
// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.
function isPrefixOfWord(sentence, searchWord) {
    var words = sentence.split(" "); // Split the sentence into words
    for (var i = 0; i < words.length; i++) {
        // Check if searchWord is a prefix of words[i]
        if (words[i].startsWith(searchWord)) {
            return i + 1; // Return the 1-indexed position of the word
        }
    }
    return -1; // If no word starts with searchWord, return -1
}
// Test cases
console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
