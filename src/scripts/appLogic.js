import { displaySidebarContent, clearNewProjectForm, clearTodos, clearNewTodoForm, displayTodos, clearMain, clearSidebar, displayProject } from "./display";

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
    const newProject = new Project(projectTitle, projectDesc);
    projects.push(newProject);
    clearNewProjectForm();
    clearSidebar();
    displaySidebarContent(projects);
}

function createNewTodo() {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    const todoTitle = document.querySelector('#createTodoTitle').value;
    const todoDesc = document.querySelector('#createTodoDesc').value;
    const todoPriority = document.querySelector('#createTodoPrio').value;
    const todoDate = document.querySelector('#createTodoDate').value;
    const newTodo = new Todo(todoTitle, todoDesc, todoDate,todoPriority);
    currentProject.todos.push(newTodo);
    clearNewTodoForm();
    clearTodos();
    displayTodos(currentProject);
    clearSidebar();
    displaySidebarContent(projects);
}

function deleteTodo() {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    const todoDiv = this.parentElement.parentElement.parentElement;
    const todoIndex = todoDiv.getAttribute('data-index');
    currentProject.todos.splice(todoIndex, 1);
    clearTodos();
    displayTodos(currentProject);
    clearSidebar();
    displaySidebarContent(projects);
}

function deleteProject() {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    if (projectIndex > 0) {
        projects.splice(projectIndex, 1);
        clearMain();
        displayProject(projects[projectIndex - 1], projects);
        displayTodos(projects[projectIndex - 1]);
        clearSidebar();
        displaySidebarContent(projects);
    } else {
        alert("Unable to delete first project")
    }
}

function toggleTodoDetails() {
    if (this.textContent === "Show Details") {
        const projectDiv = document.querySelector('.projectDiv');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
        const todoDiv = this.parentElement.parentElement.parentElement;
        const todoIndex = todoDiv.getAttribute('data-index');
        const todo = currentProject.todos[todoIndex];
        const todoDetailsDiv = document.createElement('div');
        todoDetailsDiv.setAttribute('class', 'todoDetailsDiv');
        todoDiv.appendChild(todoDetailsDiv);
        let todoInfoDiv = document.createElement('div');
        todoInfoDiv.setAttribute('class', 'todoInfoDiv');
        todoDetailsDiv.appendChild(todoInfoDiv);
        let todoDueDate = document.createElement('time');
        todoDueDate.setAttribute('class', 'todoDueDate');
        todoDueDate.setAttribute('datetime', todo.dueDate);
        todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
        todoInfoDiv.appendChild(todoDueDate);
        let todoPriority = document.createElement('p');
        todoPriority.setAttribute('class', 'todoPriority');
        todoPriority.textContent = `Priority: ${todo.priority}`;
        todoInfoDiv.appendChild(todoPriority);
        let todoDescription = document.createElement('p');
        todoDescription.setAttribute('class', 'todoDescription');
        todoDescription.textContent = todo.description;
        todoDetailsDiv.appendChild(todoDescription);
        this.textContent = "Hide Details";
    } else {
        const todoDiv = this.parentElement.parentElement.parentElement;
        todoDiv.removeChild(todoDiv.lastElementChild);
        this.textContent = "Show Details";
    }
}

function selectProject() {
    clearMain();
    let projectIndex = this.parentElement.getAttribute('data-index');
    displayProject(projects[projectIndex], projects);
    displayTodos(projects[projectIndex]);
}

function setupDefaults() {
    const defaultProject = new Project("Default", "This is the default project");
    const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low");
    projects.push(defaultProject);
    defaultProject.todos.push(defaultTodo);
    displaySidebarContent(projects);
    displayProject(projects[0], projects);
    displayTodos(projects[0]);
}


export { createNewProject, setupDefaults, createNewTodo, selectProject, deleteTodo, deleteProject, toggleTodoDetails };