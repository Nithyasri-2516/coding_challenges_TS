// 1.program to check vowel or consonant using switch case

let alpha:string="a";
switch(alpha){
    case alpha="a":
    console.log("its vowel");
    break;

    case alpha="e":
    console.log("its vowel");
    break;
    
        case alpha="i":
        console.log("its vowel");
        break;
    
        case alpha="o":
        console.log("its vowel");
        break;
    
        case alpha="u":
        console.log("its vowel");
        break;
    
   
    default:
        console.log("consonent");
        break;
}



// input: [12,52,56], [34,89,9]
//output: [9,12,34,52,56,89]

let arr1: number[]= [12,52,56];
let arr2: number[]= [34,89,19];

let res= arr1.concat(arr2);
console.log(res);

let sort=res.sort((a,b)=> a-b).join(",");
console.log(sort);
