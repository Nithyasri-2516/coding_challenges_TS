function maxCommStr(s1, s2) {
    var m = s1.length;
    var n = s2.length;
    var res = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var curr = 0;
            while ((i + curr) < m && (j + curr) < n &&
                s1[i + curr] === s2[j + curr]) {
                curr++;
            }
            res = Math.max(res, curr);
        }
    }
    return res;
}
var s1 = "abcdefg";
var s2 = "cdegabcd";
console.log(maxCommStr(s1, s2));
