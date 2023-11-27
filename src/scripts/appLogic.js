import { displaySidebarContent, clearNewProjectForm, displayTodos, clearSidebar } from "./display";

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

function createNewProjectForm() {
    const projectFormDiv = document.querySelector('#projectFormDiv');
    const createProjectTitleLabel = document.createElement('label');
    createProjectTitleLabel.textContent = "Project Title: ";
    createProjectTitleLabel.setAttribute('for', 'createProjectTitle');
    projectFormDiv.appendChild(createProjectTitleLabel);
    const createProjectTitle = document.createElement('input');
    createProjectTitle.setAttribute('type', 'text');
    createProjectTitle.setAttribute('id', 'createProjectTitle');
    projectFormDiv.appendChild(createProjectTitle);
    const createProjectDescLabel = document.createElement('label');
    createProjectDescLabel.textContent = "Project Description: ";
    createProjectDescLabel.setAttribute('for', 'createProjectDescription');
    projectFormDiv.appendChild(createProjectDescLabel);
    const createProjectDescription = document.createElement('textarea');
    createProjectDescription.setAttribute('id', 'createProjectDescription');
    projectFormDiv.appendChild(createProjectDescription);
    const createProjectSubmitButton = document.createElement('button');
    createProjectSubmitButton.textContent = "Submit";
    createProjectSubmitButton.addEventListener('click', createNewProject);
    projectFormDiv.appendChild(createProjectSubmitButton);
}



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

//setup defaults
const defaultProject = new Project("Default", "This is the default project");
const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low", "Notes");
projects.push(defaultProject);
defaultProject.todos.push(defaultTodo);
displaySidebarContent(projects);
displayTodos(defaultProject);

export { createNewProjectForm, createNewProject };