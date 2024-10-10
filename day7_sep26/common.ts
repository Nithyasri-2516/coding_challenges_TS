// input: china india
//output: 3

//common characters are i,n,a
function commonCharactersCount(str1: string, str2: string): number {
    let commonCount = 0;
    let visitedStr2: boolean[] = new Array(str2.length)
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j] && !visitedStr2[j]) {
                commonCount++;
                visitedStr2[j] = true; 
                break; 
            }
        }
    }

    return commonCount;
}
const str1 = "china";
const str2 = "india";
console.log(commonCharactersCount(str1, str2)); // Output: 3
