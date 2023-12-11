import '../style.css';
import { createNewProjectForm, createNewTodoForm } from './display.js';
import { setupDefaults, deleteProject, editProject, editTodo, toggleTodoDetails, deleteTodo, selectProject } from './appLogic.js';

const createProjectButton = document.querySelector('#addProjectButton');
createProjectButton.addEventListener('click', createNewProjectForm);

const projectDeleteBtn = document.querySelector('#projectDeleteBtn');
projectDeleteBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete this project?")) {
        deleteProject();
    }   else {
        return;
    }
})

const main = document.querySelector('main');
main.addEventListener('click', function (event) {
    if (event.target.classList.contains('todoEditBtn')) {
        editTodo(event);
    }
});
main.addEventListener('click', function(event) {
    if (event.target.classList.contains('todoDetailsBtn')) {
        toggleTodoDetails(event);
    }
});
main.addEventListener('click', function(event) {
    if (event.target.classList.contains('todoDeleteBtn')) {
        deleteTodo(event);
    }
});

const projectsList = document.querySelector('#projectsList');
projectsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('sideProjectTitle')) {
        selectProject(event);
    }
})

const createTodoBtn = document.querySelector('#createTodoBtn');
createTodoBtn.addEventListener('click', createNewTodoForm);

const projectEditBtn = document.querySelector('#projectEditBtn');
projectEditBtn.addEventListener('click', editProject);

setupDefaults();