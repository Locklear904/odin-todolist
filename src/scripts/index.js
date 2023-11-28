import '../style.css';
import { createNewProjectForm } from './display.js';
import { setupDefaults } from './appLogic.js';

const createProjectButton = document.querySelector('#addProjectButton');
createProjectButton.addEventListener('click', createNewProjectForm);

setupDefaults();