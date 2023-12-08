import '../style.css';
import { createNewProjectForm, createNewTodoForm } from './display.js';
import { setupDefaults, deleteProject, editProject } from './appLogic.js';

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

const createTodoBtn = document.querySelector('#createTodoBtn');
createTodoBtn.addEventListener('click', createNewTodoForm);

const projectEditBtn = document.querySelector('#projectEditBtn');
projectEditBtn.addEventListener('click', editProject);

setupDefaults();