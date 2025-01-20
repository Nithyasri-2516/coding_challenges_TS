function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(1);

    // Compute left cumulative product
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Compute right cumulative product and update result
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Example Usage
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([5, 1, 4, 2])); // Output: [8, 40, 10, 20]