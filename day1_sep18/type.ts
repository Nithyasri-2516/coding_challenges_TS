// get type of value

let type: (n:any)=> any;
type= function(n:any){
    return typeof(n);
}
console.log(type("abi"));
console.log(type(4));
console.log(type(true));