// Input

// Input size of array: 10
// Input array elements: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// Output

// Sum of array: 55


function main() {
    const size = 10;
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]; 
    if (elements.length !== size) {
        console.log(`Error: Expected `);
        return;
    }
    const sum = calculateSum(elements);
    console.log(`Sum of array: ${sum}`);
}
function calculateSum(array: number[]): number {
    return array.reduce((a, b) => a + b, 0); // Sum the elements
}

main();
