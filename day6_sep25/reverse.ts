function isReverse(num: number): any {
    const numStr = num.toString(); 
    const reversedStr = numStr.split('').reverse().join(''); 
    return (`reverse= ${reversedStr} `);
    
}
console.log(isReverse(1231));
