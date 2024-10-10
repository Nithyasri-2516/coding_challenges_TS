// input: china india
//output: 3
//common characters are i,n,a
function commonCharactersCount(str1, str2) {
    var commonCount = 0;
    // Create arrays to mark visited characters
    var visitedStr2 = new Array(str2.length);
    // Loop through each character in the first string
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            // If the characters match and str2 character is not visited yet
            if (str1[i] === str2[j] && !visitedStr2[j]) {
                commonCount++;
                visitedStr2[j] = true; // Mark the character as visited
                break; // Move to the next character in str1
            }
        }
    }
    return commonCount;
}
var str1 = "china";
var str2 = "india";
console.log(commonCharactersCount(str1, str2)); // Output: 3
