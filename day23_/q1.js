var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function finalPrices(prices) {
    var n = prices.length;
    var result = __spreadArray([], prices, true); // Start with the original prices
    // Iterate over the prices array
    for (var i = 0; i < n; i++) {
        // Look for a discount for the current item (prices[i])
        for (var j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                result[i] = prices[i] - prices[j];
                break; // Exit the loop once we find the discount
            }
        }
    }
    return result;
}
var prices1 = [8, 4, 6, 2, 3];
console.log(finalPrices(prices1)); // Output: [4, 2, 4, 2, 3]
