//Declare two variables x and y with numerical values. Swap their values without using a third variable//
function swapping(a, b) {
    a = a + b; //3
    b = a - b; //1
    a = a - b; //2
    return [a, b]; //2,1
}
console.log(swapping(1, 2));
