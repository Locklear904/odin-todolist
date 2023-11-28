const projectsList = document.querySelector('#projectsList');
const main = document.querySelector('main');

function displaySidebarTodos(project, projectDiv) {
    project.todos.forEach((todo) => {
        let sideTodoDiv = document.createElement('div');
        sideTodoDiv.setAttribute('class', 'sideTodoDiv');
        projectDiv.appendChild(sideTodoDiv);
        let sideTodoTitle = document.createElement('h4');
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
        projectsList.appendChild(projectDiv);
        let projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectTitle.setAttribute('class', 'sideProjectTitle');
        projectDiv.appendChild(projectTitle);
        let projectDescription = document.createElement('p');
        projectDescription.setAttribute('class', 'sideProjectDescription');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        //Populates todos
        displaySidebarTodos(project, projectDiv);
    });
}

function displayTodos(project) {
    project.todos.forEach(todo => {
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todoDiv');
        main.appendChild(todoDiv);
        let todoTitle = document.createElement('h3');
        todoTitle.setAttribute('class', 'mainTodoTitle');
        todoTitle.textContent = todo.title;
        todoDiv.appendChild(todoTitle);
        let todoDescription = document.createElement('p');
        todoDescription.setAttribute('class', 'todoDescription');
        todoDescription.textContent = todo.description;
        todoDiv.appendChild(todoDescription);
        let todoDueDate = document.createElement('time');
        todoDueDate.setAttribute('class', 'todoDueDate');
        todoDueDate.setAttribute('datetime', todo.dueDate);
        todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
        todoDiv.appendChild(todoDueDate);
        let todoPriority = document.createElement('p');
        todoPriority.setAttribute('class', 'todoPriority');
        todoPriority.textContent = `Priority: ${todo.priority}`;
        todoDiv.appendChild(todoPriority);
        let todoNotes = document.createElement('p');
        todoNotes.setAttribute('class', 'todoNotes');
        todoNotes.textContent = `Notes: ${todo.notes}`;
        todoDiv.appendChild(todoNotes);
    });
}

function displayProject(project) {
    let main = document.querySelector('main');
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'projectDiv');
    main.appendChild(projectDiv);
    let projectHeader = document.createElement('div');
    projectHeader.setAttribute('class', 'projectHeader');
    projectDiv.appendChild(projectHeader);
    let projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;
    projectTitle.setAttribute('class', 'projectTitle');
    projectHeader.appendChild(projectTitle);
    let projectEditButton = document.createElement('button')
    projectEditButton.setAttribute('class', 'projectEditBtn');
    projectEditButton.textContent = "Edit Project";
    projectHeader.appendChild(projectEditButton);
    let projectDescription = document.createElement('p');
    projectDescription.setAttribute('class', 'projectDescription');
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);
}

function clearSidebar() {
    const projectsList = document.querySelector('#projectsList');
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }
}

function clearNewProjectForm() {
    const projectFormDiv = document.querySelector('#projectFormDiv');
    while (projectFormDiv.firstChild) {
        projectFormDiv.removeChild(projectFormDiv.firstChild);
    }
}

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

export {displaySidebarContent, displayTodos, clearSidebar, clearNewProjectForm, createNewProjectForm, displayProject };