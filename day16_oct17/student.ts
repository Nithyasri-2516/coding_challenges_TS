//Write a function to search for a department by its department id/ department name,
// if department exists to return list  of students.

let data: any[] = [
  { id: 1, name: "cse", stu: 120 },
  { id: 2, name: "eee", stu: 67 },
  { id: 3, name: "ece", stu: 56 },
];

const searchDepartment = (depName: string) => {
  for (let i = 0; i < data.length; i++) {
      if (data[i].name === depName) {
          return data[i];
      }
  }
  return "Department not found.";
}

console.log(searchDepartment("cse")); 
console.log(searchDepartment("eee"));  
console.log(searchDepartment("xyz"));  


// const dep = "cse";  
//   const idname=2;
  
//   const res = data.find(item =>
//      item.name === dep || item.id ===idname
// );
  
//   if (res) {
//     console.log(`Department ID: ${res.id}, Name: ${res.name}, Students: ${res.stu}`);
//   } else {
//     console.log("Department not found.");
//   }
  
   



