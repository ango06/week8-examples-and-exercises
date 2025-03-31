// Create your interfaces and enum below:

// Create your task below:

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
// console.log(task);

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: number;
}

enum Priority {
    Low,
    Medium,
    High
}

interface TaskPriority extends Task {
    priority: Priority;
}

// separated by commas, not semicolons like definitions
const task: TaskPriority = {
    id: 1,
    title: "First",
    description: "Do this first.",
    dueDate: 20,
    priority: Priority.Medium
}

