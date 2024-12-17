// Write a program to count the frequency of each word in a string using a dictionary. 
//     Input: "this is a test this is only a test"
//     Output: {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}

function count(a: string):any{
    const frequency:{[key:string]:number}={}

    const data=a.split(' ')
    for(let words of data){
        if(frequency[words]){
            frequency[words]+=1
        }
        else{
            frequency[words]=1
        }
    }
    return frequency;
}
console.log(count("this is a test this is a test only"));
