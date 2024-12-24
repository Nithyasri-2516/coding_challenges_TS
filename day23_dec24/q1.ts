function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const result: number[] = [...prices];  
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                result[i] = prices[i] - prices[j];
                break;  
            }}
    }
    
    return result;
}

const prices1 = [8, 4, 6, 2, 3];
console.log(finalPrices(prices1));  // Output: [4, 2, 4, 2, 3]

const prices2 = [1, 2, 3, 4, 5];
console.log(finalPrices(prices2));  // Output: [1, 2, 3, 4, 5]

const prices3 = [10, 1, 1, 6];
console.log(finalPrices(prices3));  // Output: [9, 0, 1, 6]
