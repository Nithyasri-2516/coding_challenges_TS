function check(s) {
    var max = 0;
    var leftZeroes = 0;
    var rightOnes = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === '1') {
            rightOnes++;
        }
    }
    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            leftZeroes++;
        }
        else {
            rightOnes--;
        }
        var score = leftZeroes + rightOnes;
        max = Math.max(max, score);
    }
    return max;
}
console.log(check("011101"));
