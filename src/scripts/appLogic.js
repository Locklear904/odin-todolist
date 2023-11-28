import { displaySidebarContent, clearNewProjectForm, displayTodos, clearSidebar, displayProject } from "./display";

class Project {
    constructor(title = "Default", description = "") {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
}

class Todo extends Project {
    constructor(title, description = "", dueDate, priority = "Low", notes = "") {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

const projects = [];





function createNewProject() {
    const projectTitle = document.querySelector('#createProjectTitle').value;
    const projectDesc = document.querySelector('#createProjectDescription').value;
    
    if (projectTitle) {
        const newTodo = new Project(projectTitle, projectDesc);
        projects.push(newTodo);
        clearNewProjectForm();
        clearSidebar();
        displaySidebarContent(projects);
    }
}

function setupDefaults() {
    const defaultProject = new Project("Default", "This is the default project");
    const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low", "Notes");
    projects.push(defaultProject);
    defaultProject.todos.push(defaultTodo);
    displaySidebarContent(projects);
    displayProject(projects[0]);
    displayTodos(defaultProject);
}


export { createNewProject, setupDefaults };