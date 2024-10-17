interface Student {
    id: number;
    name: string;
  }
  interface Department {
    departmentId: number;
    departmentName: string;
    students: Student[];
  }
  const departments: Department[] = [
    {
      departmentId: 1,
      departmentName: "Computer Science",
      students: [{ id: 101, name: "Alice" }, { id: 102, name: "Bob" },  ],
    },
    {
      departmentId: 2,
      departmentName: "Mechanical Engineering",
      students: [ { id: 103, name: "Charlie" },{ id: 104, name: "David" }, ],
    },
    {
      departmentId: 3,
      departmentName: "Electrical Engineering",
      students: [ { id: 105, name: "Eva" }, { id: 106, name: "Frank" },],
    },
  ];
  

  function findDepartment(searchKey: number | string): Student[] | string {
    const department = departments.find(dept =>
        dept.departmentId === searchKey || dept.departmentName.toLowerCase() === (searchKey as string).toLowerCase()
    );
    return department ? department.students : "Department not found.";
}
  console.log(findDepartment(1)); 
  console.log(findDepartment("Mechanical Engineering")); 
  console.log(findDepartment("Physics")); 
  