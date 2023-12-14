import { displaySidebarContent, clearNewProjectForm, clearTodos, clearNewTodoForm, displayTodos, clearMain, clearSidebar, displayProject, createTodoEditForm, showTodoDetails, createEditProjectForm } from "./display";

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

let projects = [];

function createNewProject() {
    const projectTitle = document.querySelector('#createProjectTitle').value;
    const projectDesc = document.querySelector('#createProjectDescription').value;
    const newProject = new Project(projectTitle, projectDesc);
    projects.push(newProject);
    saveProjects();
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
    saveProjects();
    clearNewTodoForm();
    clearTodos();
    displayTodos(currentProject);
    clearSidebar();
    displaySidebarContent(projects);
}

function submitProjectEdit(projectHeader, projectDiv, currentProject) {
    const projectTitleEdit = document.querySelector('#projectTitleEdit');
    const projectDescriptionEdit = document.querySelector('#projectDescriptionEdit');
    currentProject.title = projectTitleEdit.value;
    currentProject.description = projectDescriptionEdit.value;
    const projectTitleLabel = document.querySelector('#projectTitleLabel');
    projectTitleLabel.remove();
    const projectDescriptionLabel = document.querySelector('#projectDescriptionLabel');
    projectDescriptionLabel.remove();
    const projectTitle = document.createElement('h2');
    projectTitle.setAttribute('class', 'projectTitle');
    projectTitle.textContent = currentProject.title;
    projectHeader.replaceChild(projectTitle, projectTitleEdit);
    const projectDescription = document.createElement('p');
    projectDescription.setAttribute('class', 'projectDescription');
    projectDescription.textContent = currentProject.description;
    projectDiv.replaceChild(projectDescription, projectDescriptionEdit);
}

function editProject(event) {
    const projectHeader = document.querySelector('.projectHeader');
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    if (event.target.textContent === "Edit") {
        createEditProjectForm(projectHeader, projectDiv, currentProject);
        event.target.textContent = "Submit";
    } else if (event.target.textContent = "Submit") {
        submitProjectEdit(projectHeader, projectDiv, currentProject);
        saveProjects();
        event.target.textContent = "Edit";
    }
}

function deleteTodo(event) {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    const todoDiv = event.target.closest('.todoDiv');
    const todoIndex = todoDiv.getAttribute('data-index');
    currentProject.todos.splice(todoIndex, 1);
    saveProjects();
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
        saveProjects();
        clearMain();
        displayProject(projects[projectIndex - 1], projects);
        displayTodos(projects[projectIndex - 1]);
        clearSidebar();
        displaySidebarContent(projects);
    } else {
        alert("Unable to delete first project")
    }
}

function toggleTodoDetails(event) {
    if (event.target.textContent === "Show Details") {
        showTodoDetails(event, projects);
    } else {
        const todoDiv = event.target.closest('.todoDiv');
        todoDiv.removeChild(todoDiv.lastElementChild);
        event.target.textContent = "Show Details";
    }
}

function submitTodoEdit(todoIndex, todo) {
    const todoEditTitle = document.querySelector(`#todoEditTitle${todoIndex}`);
    todo.title = todoEditTitle.value;
    const todoEditDescription = document.querySelector(`#todoEditDescription${todoIndex}`);
    todo.description = todoEditDescription.value;
    const todoEditPriority = document.querySelector(`#todoEditPriority${todoIndex}`);
    todo.priority = todoEditPriority.value;
    const todoEditDate = document.querySelector(`#todoEditDate${todoIndex}`);
    todo.dueDate = todoEditDate.value;
}

function editTodo(event) {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    const todoDiv = event.target.closest('.todoDiv');
    const todoIndex = todoDiv.getAttribute('data-index');
    const todo = currentProject.todos[todoIndex];
    if (event.target.textContent === "Edit") {
        createTodoEditForm(todoDiv, todoIndex, todo);
        event.target.textContent = "Submit";
    } else if (event.target.textContent === "Submit") {
        submitTodoEdit(todoIndex, todo);
        saveProjects();
        clearMain();
        displayTodos(currentProject);
        event.target.textContent = "Edit";
    }
}

function selectProject(event) {
    clearMain();
    const sideProjectDiv = event.target.closest('.sideProjectDiv');
    const projectIndex = sideProjectDiv.getAttribute('data-index');
    displayProject(projects[projectIndex], projects);
    displayTodos(projects[projectIndex]);
}

function createDefaultProjectAndTodo() {
    const defaultProject = new Project("Default", "This is the default project");
    const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low");
    projects.push(defaultProject);
    defaultProject.todos.push(defaultTodo);
}

function loadProjects() {
    if (localStorage.getItem('projects')) {
        projects = JSON.parse(localStorage.getItem('projects'));
    }   else {
        createDefaultProjectAndTodo();
    }
}

function saveProjects() {
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', projectsJSON);
}

function setupDefaults() {
    loadProjects();
    displaySidebarContent(projects);
    displayProject(projects[0], projects);
    displayTodos(projects[0]);
}

export { createNewProject, setupDefaults, createNewTodo, editTodo, selectProject, deleteTodo, deleteProject, toggleTodoDetails, editProject };