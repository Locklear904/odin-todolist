import '../style.css';
import { createNewProjectForm } from './appLogic';

const createProjectButton = document.querySelector('#addProjectButton');
createProjectButton.addEventListener('click', createNewProjectForm);
