// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

let compare:(a:any,b:any)=> any;

compare= function(a:any, b:any){
    if(a==b){   
        return true;
    }
    else{
        return false;
    }
}
console.log(compare('2',2)); //false
console.log(compare(2,2)); //true