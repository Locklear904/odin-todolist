const projectsList = document.querySelector('#projectsList');
const main = document.querySelector('main');
import { createNewProject, createNewTodo, selectProject } from "./appLogic";

function displaySidebarTodos(project, projectTodos) {
    project.todos.forEach((todo) => {
        let sideTodoDiv = document.createElement('div');
        sideTodoDiv.setAttribute('class', 'sideTodoDiv');
        projectTodos.appendChild(sideTodoDiv);
        let sideTodoTitle = document.createElement('li');
        sideTodoTitle.textContent = todo.title;
        sideTodoTitle.setAttribute('class', 'sideTodoTitle');
        sideTodoDiv.appendChild(sideTodoTitle);
    });
}

function displaySidebarContent(projects) {
    projects.forEach((project) => {
        //Populates projects
        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'sideProjectDiv');
        projectDiv.setAttribute('data-index', projects.indexOf(project));
        projectsList.appendChild(projectDiv);
        let projectTitle = document.createElement('button');
        projectTitle.textContent = project.title;
        projectTitle.setAttribute('class', 'sideProjectTitle');
        projectDiv.appendChild(projectTitle);
        let projectTodos = document.createElement('ul');
        projectTodos.setAttribute('class', 'sideTodoList');
        projectDiv.appendChild(projectTodos);
        //Populates todos
        displaySidebarTodos(project, projectTodos);
    });
}

function displayTodos(project) {
    project.todos.forEach(todo => {
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todoDiv');
        todoDiv.setAttribute('data-index', project.todos.indexOf(todo));
        main.appendChild(todoDiv);
        let todoHeader = document.createElement('div');
        todoHeader.setAttribute('class', 'todoHeader');
        todoDiv.appendChild(todoHeader);
        let todoTitle = document.createElement('h3');
        todoTitle.setAttribute('class', 'mainTodoTitle');
        todoTitle.textContent = todo.title;
        todoHeader.appendChild(todoTitle);
        let todoBtnDiv = document.createElement('div');
        todoBtnDiv.setAttribute('class', 'todoBtnDiv');
        todoHeader.appendChild(todoBtnDiv);
        let todoDetailsBtn = document.createElement('button');
        todoDetailsBtn.setAttribute('class', 'todoDetailsBtn');
        todoDetailsBtn.textContent = "Show Details";
        todoBtnDiv.appendChild(todoDetailsBtn);
        let todoEditBtn = document.createElement('button');
        todoEditBtn.setAttribute('class', 'todoEditBtn');
        todoEditBtn.textContent = "Edit";
        todoBtnDiv.appendChild(todoEditBtn);
        let todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.setAttribute('class', 'todoDeleteBtn');
        todoDeleteBtn.setAttribute('title', 'Delete Todo')
        todoDeleteBtn.textContent = "x";
        todoBtnDiv.appendChild(todoDeleteBtn);
    });
}

function displayProject(project, projects) {
    const projectDiv = document.querySelector('.projectDiv');
    projectDiv.setAttribute('data-index', projects.indexOf(project));
    const projectTitle = document.querySelector('.projectTitle');
    projectTitle.textContent = project.title;
    const projectDescription = document.querySelector('.projectDescription');
    projectDescription.textContent = project.description;
}

function clearMain() {
    const projectDiv = document.querySelector('.projectDiv');
    while (projectDiv.nextElementSibling) {
        projectDiv.nextElementSibling.remove();
    }
}

function clearSidebar() {
    const projectsList = document.querySelector('#projectsList');
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }
}

function clearNewProjectForm() {
    const projectForm = document.querySelector('#projectForm');
    while (projectForm.firstChild) {
        projectForm.removeChild(projectForm.firstChild);
    }
}

function clearNewTodoForm() {
    const todoForm = document.querySelector('#todoForm');
    while (todoForm.firstChild) {
        todoForm.removeChild(todoForm.firstChild);
    }
}

function clearTodos() {
    const main = document.querySelector('main');
    while (main.children[1]) {
        main.removeChild(main.children[1]);
    }
}

function createNewProjectForm() {
    const projectForm = document.querySelector('#projectForm');
    if (projectForm.firstChild) {
        return;
    }
    const projectFormHeader = document.createElement('h3');
    projectFormHeader.textContent = "Create a Project"
    projectFormHeader.setAttribute('id', 'projectFormHeader');
    projectForm.appendChild(projectFormHeader);
    const createProjectTitleLabel = document.createElement('label');
    createProjectTitleLabel.textContent = "Project Title: ";
    createProjectTitleLabel.setAttribute('for', 'createProjectTitle');
    projectForm.appendChild(createProjectTitleLabel);
    const createProjectTitle = document.createElement('input');
    createProjectTitle.setAttribute('type', 'text');
    createProjectTitle.setAttribute('id', 'createProjectTitle');
    createProjectTitle.setAttribute('required', '');
    projectForm.appendChild(createProjectTitle);
    const createProjectDescLabel = document.createElement('label');
    createProjectDescLabel.textContent = "Project Description: ";
    createProjectDescLabel.setAttribute('for', 'createProjectDescription');
    projectForm.appendChild(createProjectDescLabel);
    const createProjectDescription = document.createElement('textarea');
    createProjectDescription.setAttribute('id', 'createProjectDescription');
    projectForm.appendChild(createProjectDescription);
    const createProjectButtonDiv = document.createElement('div');
    createProjectButtonDiv.setAttribute('id', 'createProjectButtonDiv');
    projectForm.appendChild(createProjectButtonDiv);
    const createProjectSubmitButton = document.createElement('button');
    createProjectSubmitButton.textContent = "Submit";
    createProjectSubmitButton.setAttribute('type', 'button');
    createProjectSubmitButton.addEventListener('click', createNewProject);
    createProjectButtonDiv.appendChild(createProjectSubmitButton);
    const createProjectCancelButton = document.createElement('button');
    createProjectCancelButton.textContent = "Cancel";
    createProjectCancelButton.addEventListener('click', clearNewProjectForm);
    createProjectButtonDiv.appendChild(createProjectCancelButton);
}

function createNewTodoForm() {
    const projectDiv = document.querySelector('.projectDiv');
    const todoForm = document.createElement('form');
    todoForm.setAttribute('id', 'todoForm');
    projectDiv.after(todoForm);
    if (todoForm.firstChild) {
        return;
    }
    const todoFormHeader = document.createElement('h3');
    todoFormHeader.textContent = "Create a New Todo";
    todoForm.appendChild(todoFormHeader);
    const createTodoTitleLabel = document.createElement('label');
    createTodoTitleLabel.textContent = "Todo Title: ";
    createTodoTitleLabel.setAttribute('for', 'createTodoTitle');
    todoForm.appendChild(createTodoTitleLabel);
    const createTodoTitle = document.createElement('input');
    createTodoTitle.setAttribute('type', 'text');
    createTodoTitle.setAttribute('id', 'createTodoTitle');
    todoForm.appendChild(createTodoTitle);
    const createTodoDescLabel = document.createElement('label');
    createTodoDescLabel.textContent = "Todo Description: ";
    createTodoDescLabel.setAttribute('for', 'createTodoDesc');
    todoForm.appendChild(createTodoDescLabel);
    const createTodoDesc = document.createElement('textarea');
    createTodoDesc.setAttribute('id', 'createTodoDesc');
    todoForm.appendChild(createTodoDesc);
    const createTodoPrioLabel = document.createElement('label');
    createTodoPrioLabel.textContent = "Todo Priority: ";
    createTodoPrioLabel.setAttribute('for', 'createTodoPrio');
    todoForm.appendChild(createTodoPrioLabel);
    const createTodoPrio = document.createElement('select');
    createTodoPrio.setAttribute('id', 'createTodoPrio');
    todoForm.appendChild(createTodoPrio);
    const prioOptionOne = document.createElement('option');
    prioOptionOne.setAttribute('value', 'High');
    prioOptionOne.textContent = "High";
    createTodoPrio.appendChild(prioOptionOne);
    const prioOptionTwo = document.createElement('option');
    prioOptionTwo.setAttribute('value', 'Medium');
    prioOptionTwo.textContent = "Medium";
    createTodoPrio.appendChild(prioOptionTwo);
    const prioOptionThree = document.createElement('option');
    prioOptionThree.setAttribute('value', 'Low');
    prioOptionThree.textContent = "Low";
    createTodoPrio.appendChild(prioOptionThree);
    const createTodoDateLabel = document.createElement('label');
    createTodoDateLabel.setAttribute('for', 'createTodoDate');
    createTodoDateLabel.textContent = "Due Date: ";
    todoForm.appendChild(createTodoDateLabel);
    const createTodoDate = document.createElement('input');
    createTodoDate.setAttribute('type', 'date');
    createTodoDate.setAttribute('id', 'createTodoDate');
    todoForm.appendChild(createTodoDate);
    const createTodoButtonDiv = document.createElement('div');
    createTodoButtonDiv.setAttribute('id', 'createTodoButtonDiv');
    todoForm.appendChild(createTodoButtonDiv);
    const createTodoSubmitButton = document.createElement('button');
    createTodoSubmitButton.textContent = "Submit";
    createTodoSubmitButton.addEventListener('click', createNewTodo);
    createTodoButtonDiv.appendChild(createTodoSubmitButton);
    const createTodoCancelButton = document.createElement('button');
    createTodoCancelButton.textContent = "Cancel";
    createTodoCancelButton.addEventListener('click', clearNewTodoForm);
    createTodoButtonDiv.appendChild(createTodoCancelButton);
}

export {displaySidebarContent, displayTodos, clearTodos, clearSidebar, clearNewProjectForm, clearMain, clearNewTodoForm, createNewProjectForm, displayProject, createNewTodoForm };