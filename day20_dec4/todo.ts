class ToDoList {
    private tasks: string[];
  
    constructor() {
      this.tasks = [];
    }
  
    addTask(task: string): void {
      this.tasks.push(task);
      console.log(`Task added: "${task}"`);
    }
  
    removeTask(index: number): void {
      if (index >= 0 && index < this.tasks.length) {
        let removedTask = this.tasks.splice(index, 1); // Removes the task at the given index
        console.log(`Task removed: "${removedTask[0]}"`);
      } else {
        console.log('Task index out of range.');
      }
    }
  
    viewTasks(): void {
      if (this.tasks.length === 0) {
        console.log("No tasks available.");
      } else {
        console.log("Your To-Do List:");
        for (let i = 0; i < this.tasks.length; i++) {
          console.log(`${i + 1}. ${this.tasks[i]}`);
        }
      }
    }

    completeTask(index: number): void {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index] = this.tasks[index] + " (Completed)";
        console.log(`Task marked as completed: "${this.tasks[index]}"`);
      } else {
        console.log('Task index out of range.');
      }
    }
  }
  
  // Example Usage
  const myToDoList = new ToDoList();
  
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
  