// input: dog
//output: [d,do,dog,o,og,g]


function subString(input1:string): string[]{
    const subsets: string[]=[];
    for(let i=0;i<input1.length;i++){
        for(let j=i+1;j<=input1.length;j++){
            subsets.push(input1.substring(i,j));
        }
    }
    return subsets;
}
console.log(subString("pandii"));
