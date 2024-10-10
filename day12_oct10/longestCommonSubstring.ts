function maxCommStr(s1: string, s2: string): number {
    let m: number = s1.length;
    let n: number = s2.length;
    let res: number = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let curr: number = 0;
            while ((i + curr) < m && (j + curr) < n && s1[i + curr] === s2[j + curr]) {
                curr++;
            }
            res = Math.max(res, curr);
        }
    }
    return res;
}
let s1: string = "abcdefg";
let s2: string = "cdegabcd";

console.log(maxCommStr(s1, s2));  
