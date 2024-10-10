function longestAscendingSequence(arr: number[]): {maxLen: number, sequence: number[] } {
    let maxLen = 1, currLen = 1, startIdx = 0, maxStartIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1])
             currLen++;
        else { 
            if (currLen > maxLen){ 
                    maxLen = currLen;
                    maxStartIdx = startIdx; 
                 } 
             currLen = 1; 
             startIdx = i;
            }}
         if (currLen > maxLen) { 
            maxLen = currLen; 
            maxStartIdx = startIdx;
          }
  return { maxLen, sequence: arr.slice(maxStartIdx, maxStartIdx + maxLen) };
}

const arr = [1, 2, 3, 4, 1];
const { maxLen, sequence } = longestAscendingSequence(arr);
console.log(`The max value is: ${maxLen}\n${maxLen} numbers in ascending order\n${sequence.join(" ")}`);
