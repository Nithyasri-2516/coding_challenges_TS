//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings
function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].slice(0, prefix.length) !== prefix) {
            prefix = prefix.slice(0, -1);
            if (prefix === "")
                return "";
        }
    }
    return prefix;
}
// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["nithya", "nith", "nit"])); // Output: "nit"
