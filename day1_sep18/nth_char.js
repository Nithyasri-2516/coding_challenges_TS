//Get nth character of string
var a = "nithyapandi";
var index = 5;
function nth_str(a, b) {
    if (b < 0 || b >= a.length) {
        return undefined;
    }
    return a[b];
}
var res = nth_str(a, index);
console.log(res);
