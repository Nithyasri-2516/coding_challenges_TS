// Write a function longestSubstringWithoutRepeatingCharacters that takes a string as input and returns the length of the longest substring without repeating characters.
// Example 1:
// Input: abcabcbb
// Output: abc
// Example 2:
// Input: dvdf
// Output: vdf
function longestSubstringWithoutRepeatingCharacters(s) {
    var start = 0; //1
    var maxLen = 0;
    var substring = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = start; j < i; j++) {
            if (s[i] === s[j]) {
                start = j + 1;
                break;
            }
        }
        if (i - start + 1 > maxLen) {
            maxLen = i - start + 1;
            substring = s.substring(start, i + 1);
        }
    }
    return substring;
}
console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")); // Output: abc
console.log(longestSubstringWithoutRepeatingCharacters("dvdf")); // Output: vdf
