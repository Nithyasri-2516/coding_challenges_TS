var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
    }
    ToDoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task added: \"".concat(task, "\""));
    };
    ToDoList.prototype.removeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            var removedTask = this.tasks.splice(index, 1); // Removes the task at the given index
            console.log("Task removed: \"".concat(removedTask[0], "\""));
        }
        else {
            console.log('Task index out of range.');
        }
    };
    ToDoList.prototype.viewTasks = function () {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        }
        else {
            console.log("Your To-Do List:");
            for (var i = 0; i < this.tasks.length; i++) {
                console.log("".concat(i + 1, ". ").concat(this.tasks[i]));
            }
        }
    };
    ToDoList.prototype.completeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index] = this.tasks[index] + " (Completed)";
            console.log("Task marked as completed: \"".concat(this.tasks[index], "\""));
        }
        else {
            console.log('Task index out of range.');
        }
    };
    return ToDoList;
}());
// Example Usage
var myToDoList = new ToDoList();
// Add some tasks
myToDoList.addTask("Buy groceries");
myToDoList.addTask("Walk the dog");
myToDoList.addTask("Read TypeScript documentation");
// View all tasks
myToDoList.viewTasks();
// Complete a task
myToDoList.completeTask(1); // Mark the second task (index 1) as completed
// Remove a task
myToDoList.removeTask(0); // Remove the first task (index 0)
// View updated tasks
myToDoList.viewTasks();
