// 1684. Count the Number of Consistent Strings
// Easy
// Topics
// Companies
// Hint
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
 
// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.


function countConsistentStrings(allowed: string, words: string[]): number {
    // Convert allowed string to a Set of characters for fast lookup
    const allowedSet = new Set(allowed);
    
    let consistentCount = 0;

    // Iterate over each word in the words array
    for (const word of words) {
        // Check if all characters in the word are present in allowedSet
        let isConsistent = true;
        for (const char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }

        // If the word is consistent, increment the counter
        if (isConsistent) {
            consistentCount++;
        }
    }

    return consistentCount;
}

const allowed1 = "ab";
const words1 = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed1, words1));  // Output: 2
