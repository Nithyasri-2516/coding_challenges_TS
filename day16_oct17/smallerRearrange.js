function small(a) {
    var sort = a.toString().split('').sort().join('');
    for (var _i = 0, sort_1 = sort; _i < sort_1.length; _i++) {
        var i = sort_1[_i];
        if (i == '0') {
            var result = sort[1] + sort[0] + sort.substring(2);
            return Number(result);
        }
        else if (i == '-') {
            var res = sort.replace("-", "");
            var max = "-" + res.split('').reverse().join('');
            return Number(max);
        }
    }
    return Number(sort);
}
console.log(small(90786));
console.log(small(-8609));
console.log(small(8689));
