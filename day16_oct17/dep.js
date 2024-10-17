var departments = [
    {
        departmentId: 1,
        departmentName: "Computer Science",
        students: [
            { id: 101, name: "Alice" },
            { id: 102, name: "Bob" },
        ],
    },
    {
        departmentId: 2,
        departmentName: "Mechanical Engineering",
        students: [
            { id: 103, name: "Charlie" },
            { id: 104, name: "David" },
        ],
    },
    {
        departmentId: 3,
        departmentName: "Electrical Engineering",
        students: [
            { id: 105, name: "Eva" },
            { id: 106, name: "Frank" },
        ],
    },
];
function findDepartment(searchKey) {
    for (var _i = 0, departments_1 = departments; _i < departments_1.length; _i++) {
        var department = departments_1[_i];
        if (department.departmentId === searchKey ||
            department.departmentName.toLowerCase() ===
                searchKey.toLowerCase()) {
            return department.students;
        }
    }
    return "Department not found.";
}
console.log(findDepartment(1));
console.log(findDepartment("Mechanical Engineering")); // Search by departmentName
// Output: [ { id: 103, name: 'Charlie' }, { id: 104, name: 'David' } ]
console.log(findDepartment("Physics")); // Department not found
// Output: "Department not found."
