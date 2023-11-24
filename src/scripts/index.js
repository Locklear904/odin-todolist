import '../style.css';
import { displaySidebarContent } from './display';
import { displayTodos } from './display';

class Project {
    constructor(title = "Default", description = "") {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
}

class Todo extends Project {
    constructor(title, description = "", dueDate, priority = 1, notes = "") {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

//Setup defaults
const projects = [];
const defaultProject = new Project("Default", "This is the default project");
const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", 1, "Notes");
projects.push(defaultProject);
defaultProject.todos.push(defaultTodo);

displaySidebarContent(projects);
displayTodos(defaultProject);
