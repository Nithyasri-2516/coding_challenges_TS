//Write a function that checks if two strings are anagrams of each other.

function anagrams(str1:string,str2:string){
   let val1=str1.toLowerCase();
   let val2=str2.toLowerCase();
   let sort1=val1.split('').sort().join('')
   let sort2= val2.split('').sort().join('')
   if(sort1== sort2){
       return `${str1} and ${str2} are anagrams`;
   }
   else{
    return `${str1} and ${str2} are not anagrams`;
   }

}
console.log(anagrams("listen","silent"))
console.log(anagrams("nithu","priyu"))