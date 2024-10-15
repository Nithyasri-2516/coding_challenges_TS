// You are a given with an array ar[] and number n. You have to print the sum of elements which are lesser than the n in the array.

// Example 1:
// Input:
// ar = [2,3,4,1,6,7];
// n = 4;
// Output :
// 6
// Explanation:
// 2,3,1 are the only elements which are less than 4. So 2 + 3 + 1 is 6.

// Example 2:
// Input:
// ar = [2,4,6,5,7]
// n = 2;
// Output : 0

function count(arr: number[], val: number): number {
    let sum = 0; 

    for (let n of arr) {
        if (val<n) { //   4>2
            sum += n;
        }
       
    }

    return sum;
}
console.log(count([2, 3, 4, 1, 6, 7], 4)); 
console.log(count([2, 4, 6, 5, 7], 2)); 