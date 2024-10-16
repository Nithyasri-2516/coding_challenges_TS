function array(arr: number[], num: number): any {
    let store: number[] = [];  // Initialize store as an array to collect numbers
    for (let n of arr) {
        if (n > num) {
            store.push(n);  
        }
    }
    return store; 
}

console.log(array([1, 2, 3, 5, 6, 8, 9], 6));  
