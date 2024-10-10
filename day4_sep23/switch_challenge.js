// 1.program to check vowel or consonant using switch case
var alpha = "a";
switch (alpha) {
    case alpha = "a":
        console.log("its vowel");
        break;
    case alpha = "e":
        console.log("its vowel");
        break;
    case alpha = "i":
        console.log("its vowel");
        break;
    case alpha = "o":
        console.log("its vowel");
        break;
    case alpha = "u":
        console.log("its vowel");
        break;
    default:
        console.log("consonent");
        break;
}
// program to find maximum between two numbers using switch case
// input: [12,52,56], [34,89,9]
//output: [9,12,34,52,56,89]
var arr1 = [12, 52, 56];
var arr2 = [34, 89, 19];
var res = arr1.concat(arr2);
console.log(res);
var sort = res.sort(function (a, b) { return a - b; }).join(",");
console.log(sort);
