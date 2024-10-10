//Get nth character of string

const a ="nithyapandi";
const b= 5;


function nth_str(a:string , b:number ): string | undefined{
  if(b<0 || b>=a.length){
    return undefined;
  }
  return a[b];
}

const res= nth_str(a, b);
console.log(res);
