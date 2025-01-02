function check(s:string):any{

  let max=0;
  let leftZeroes=0;
let rightOnes=0;

  for(let char of s){
    if( char==='1'){
        rightOnes++;
    }
  }

  for(let i=0;i< s.length-1;i++){
    if(s[i]==="0"){
        leftZeroes++;
    }
    else{
        rightOnes--;
    }
    const score=leftZeroes+rightOnes;
     max= Math.max(max,score);

  }
return max
}
console.log(check("011101"));
