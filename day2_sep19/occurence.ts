let str1 = "mummy";
let Count = 0;
let max = '';
let alphabet = {};
let char;
for (char of str1) {
    alphabet[char] = (alphabet[char] || 0) + 1;
}
let c;
for (c in alphabet) {
    if (alphabet[c] > Count) {
        Count = alphabet[c];
        max = c;
    }
}

console.log( alphabet);
console.log(`  ${max} : ${Count}`);
