// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.


//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}

function groupAlphabets(string:string[]): {[key:string]: string[]}
{
    const group={};
    for(let str of string){
         const first= str.charAt(0).toLowerCase();
         if(!group[first]){
              group[first]=[]
         }
         group[first].push(str);
    }
    return group;
}
const res = groupAlphabets(['Nithya','nithu','pandi','kavi','kavya']);
console.log(res);









