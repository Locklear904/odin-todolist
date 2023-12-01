import '../style.css';
import { createNewProjectForm, createNewTodoForm } from './display.js';
import { setupDefaults } from './appLogic.js';

const createProjectButton = document.querySelector('#addProjectButton');
createProjectButton.addEventListener('click', createNewProjectForm);

const createTodoBtn = document.querySelector('#createTodoBtn');
createTodoBtn.addEventListener('click', createNewTodoForm);

setupDefaults();