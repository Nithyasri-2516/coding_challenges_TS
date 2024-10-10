// Input
// Input size of array: 10
// Input array elements: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// Output
// Sum of array: 55
function main() {
    var size = 10;
    var elements = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
    if (elements.length !== size) {
        console.log("Error: Expected ");
        return;
    }
    var sum = calculateSum(elements);
    console.log("Sum of array: ".concat(sum));
}
function calculateSum(array) {
    return array.reduce(function (a, b) { return a + b; }, 0); // Sum the elements
}
main();
