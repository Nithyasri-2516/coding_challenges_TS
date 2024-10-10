var str1 = "mummy";
var Count = 0;
var max = '';
var alphabet = {};
var char;
for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
    char = str1_1[_i];
    alphabet[char] = (alphabet[char] || 0) + 1;
}
var c;
for (c in alphabet) {
    if (alphabet[c] > Count) {
        Count = alphabet[c];
        max = c;
    }
}
console.log(alphabet);
console.log("  ".concat(max, " : ").concat(Count));
