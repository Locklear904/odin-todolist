import '../style.css';

const projects = [];

class Project {
    constructor(title = "Default", description = "") {
        this.title = title;
        this.description = description;
    }
}

class Todo extends Project {
    constructor(title, description = "", dueDate, priority = 1, notes = "") {
        super(title);
        super(description);
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

const defaultProject = [];
const defaultTodo = new Todo("Test Todo", "Test Description", "Today", 1, "Notes");
projects.push(defaultProject);
defaultProject.push(defaultTodo);