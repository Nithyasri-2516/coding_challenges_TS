function small(a:number):number{
let sort= a.toString().split('').sort().join('')
for(let i of sort){
    if(i=='0'){
        var result= sort[1]+sort[0]+sort.substring(2);
        return  Number(result)
    }
    else if(i=='-'){
        var res=sort.replace("-","")
        var max="-"+res.split('').reverse().join('')
        return Number(max);
        
    }
    
}
return Number(sort);
}
console.log(small(90786));  //06789 --- 60789 
console.log(small(-8609));  //-0689   -9860
console.log(small(8689));

