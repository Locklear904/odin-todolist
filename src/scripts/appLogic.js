import { displaySidebarContent, clearNewProjectForm, displayTodos, clearMain, clearSidebar, displayProject } from "./display";

class Project {
    constructor(title = "Default", description = "") {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
}

class Todo extends Project {
    constructor(title, description = "", dueDate, priority = "Low") {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const projects = [];

function createNewProject() {
    const projectTitle = document.querySelector('#createProjectTitle').value;
    const projectDesc = document.querySelector('#createProjectDescription').value;
    const newTodo = new Project(projectTitle, projectDesc);
    projects.push(newTodo);
    clearNewProjectForm();
    clearSidebar();
    displaySidebarContent(projects);
}

function createNewTodo() {
    const todoTitle = document.querySelector('#createTodoTitle').value;
    const todoDesc = document.querySelector('#createTodoDesc').value;
    const todoPriority = document.querySelector('#createTodoPrio').value;
    const todoDate = document.querySelector('#createTodoDate').value;
    const newTodo = new Todo(todoTitle, todoDesc, todoPriority, todoDate);

}

function selectProject() {
    clearMain();
    let projectIndex = this.parentElement.getAttribute('data-index');
    displayProject(projects[projectIndex]);
    displayTodos(projects[projectIndex]);
}

function setupDefaults() {
    const defaultProject = new Project("Default", "This is the default project");
    const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low");
    projects.push(defaultProject);
    defaultProject.todos.push(defaultTodo);
    displaySidebarContent(projects);
    displayProject(projects[0]);
    displayTodos(projects[0]);
}


export { createNewProject, setupDefaults, createNewTodo, selectProject };