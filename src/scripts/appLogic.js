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

function editProject() {
    if (this.textContent === "Edit") {
        const projectHeader = document.querySelector('.projectHeader');
        const projectDiv = document.querySelector('.projectDiv');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
        const projectTitleLabel = document.createElement('label');
        projectTitleLabel.setAttribute('id', 'projectTitleLabel');
        projectTitleLabel.setAttribute('for', 'projectTitleEdit');
        projectTitleLabel.textContent = "Project Title: "
        projectHeader.prepend(projectTitleLabel);
        const projectTitle = document.querySelector('.projectTitle');
        const projectTitleInput = document.createElement('input');
        projectTitleInput.setAttribute('id', 'projectTitleEdit');
        projectTitleInput.value = currentProject.title;
        projectHeader.replaceChild(projectTitleInput, projectTitle);
        const projectDescription = document.querySelector('.projectDescription');
        const projectDescriptionLabel = document.createElement('label');
        projectDescriptionLabel.setAttribute('id', 'projectDescriptionLabel');
        projectDescriptionLabel.setAttribute('for', 'projectDescriptionEdit');
        projectDescriptionLabel.textContent = "Project Description: ";
        projectDiv.insertBefore(projectDescriptionLabel, projectDescription);
        const projectDescriptionInput = document.createElement('textarea');
        projectDescriptionInput.setAttribute('id', 'projectDescriptionEdit');
        projectDescriptionInput.value = currentProject.description; 
        projectDiv.replaceChild(projectDescriptionInput, projectDescription);
        this.textContent = "Submit";
    } else if (this.textContent = "Submit") {
        const projectDiv = document.querySelector('.projectDiv');
        const projectHeader = document.querySelector('.projectHeader');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
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
        this.textContent = "Edit";
    }
}

function deleteTodo(event) {
    const projectDiv = document.querySelector('.projectDiv');
    const projectIndex = projectDiv.getAttribute('data-index');
    const currentProject = projects[projectIndex];
    const todoDiv = event.target.closest('.todoDiv');
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

function toggleTodoDetails(event) {
    if (event.target.textContent === "Show Details") {
        const projectDiv = document.querySelector('.projectDiv');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
        const todoDiv = event.target.closest('.todoDiv');
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
        event.target.textContent = "Hide Details";
    } else {
        const todoDiv = event.target.closest('.todoDiv');
        todoDiv.removeChild(todoDiv.lastElementChild);
        event.target.textContent = "Show Details";
    }
}

function editTodo(event) {
    if (event.target.textContent === "Edit") {
        const projectDiv = document.querySelector('.projectDiv');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
        const todoDiv = event.target.closest('.todoDiv');
        const todoIndex = todoDiv.getAttribute('data-index');
        const todo = currentProject.todos[todoIndex];
        const todoEditDiv = document.createElement('div');
        todoEditDiv.setAttribute('id', `todoEditDiv${todoIndex}`);
        todoEditDiv.setAttribute('class', 'todoEditDiv');
        todoDiv.appendChild(todoEditDiv);
        const todoEditTitleLabel = document.createElement('label');
        todoEditTitleLabel.setAttribute('for', `todoEditTitle${todoIndex}`);
        todoEditTitleLabel.textContent = "Todo Title: "
        todoEditDiv.appendChild(todoEditTitleLabel);
        const todoEditTitle = document.createElement('input');
        todoEditTitle.setAttribute('id', `todoEditTitle${todoIndex}`);
        todoEditTitle.value = todo.title;
        todoEditDiv.appendChild(todoEditTitle);
        const todoEditDescriptionLabel = document.createElement('label');
        todoEditDescriptionLabel.setAttribute('for', `todoEditDescription${todoIndex}`);
        todoEditDescriptionLabel.textContent = "Todo Description: ";
        todoEditDiv.appendChild(todoEditDescriptionLabel);
        const todoEditDescription = document.createElement('textarea');
        todoEditDescription.setAttribute('id', `todoEditDescription${todoIndex}`);
        todoEditDescription.value = todo.description;
        todoEditDiv.appendChild(todoEditDescription);
        const todoEditPriorityLabel = document.createElement('label');
        todoEditPriorityLabel.setAttribute('for', `todoEditPriority${todoIndex}`);
        todoEditPriorityLabel.textContent = "Todo Priority: ";
        todoEditDiv.appendChild(todoEditPriorityLabel);
        const todoEditPriority = document.createElement('select');
        todoEditPriority.setAttribute('id', `todoEditPriority${todoIndex}`);
        todoEditDiv.appendChild(todoEditPriority);
        const todoEditPriorityHigh = document.createElement('option');
        todoEditPriorityHigh.setAttribute('value', 'High');
        todoEditPriorityHigh.textContent = "High";
        todoEditPriority.appendChild(todoEditPriorityHigh);
        const todoEditPriorityMedium = document.createElement('option');
        todoEditPriorityMedium.setAttribute('value', 'Medium');
        todoEditPriorityMedium.textContent = "Medium";
        todoEditPriority.appendChild(todoEditPriorityMedium);
        const todoEditPriorityLow = document.createElement('option');
        todoEditPriorityLow.setAttribute('value', 'Low');
        todoEditPriorityLow.textContent = "Low";
        todoEditPriority.appendChild(todoEditPriorityLow);
        todoEditPriority.value = todo.priority;
        const todoEditDateLabel = document.createElement('label');
        todoEditDateLabel.setAttribute('for', `todoEditDate${todoIndex}`);
        todoEditDateLabel.textContent = "Due Date: ";
        todoEditDiv.appendChild(todoEditDateLabel);
        const todoEditDate = document.createElement('input');
        todoEditDate.setAttribute('id', `todoEditDate${todoIndex}`);
        todoEditDate.setAttribute('type', 'date');
        todoEditDate.value = todo.dueDate;
        todoEditDiv.appendChild(todoEditDate);

        event.target.textContent = "Submit";
    } else if (event.target.textContent === "Submit") {
        const projectDiv = document.querySelector('.projectDiv');
        const projectIndex = projectDiv.getAttribute('data-index');
        const currentProject = projects[projectIndex];
        const todoDiv = event.target.closest('.todoDiv');
        const todoIndex = todoDiv.getAttribute('data-index');
        const todo = currentProject.todos[todoIndex];
        const todoEditDiv = document.querySelector(`#todoEditDiv${todoIndex}`);
        const todoEditTitle = document.querySelector(`#todoEditTitle${todoIndex}`);
        todo.title = todoEditTitle.value;
        const todoEditDescription = document.querySelector(`#todoEditDescription${todoIndex}`);
        todo.description = todoEditDescription.value;
        const todoEditPriority = document.querySelector(`#todoEditPriority${todoIndex}`);
        todo.priority = todoEditPriority.value;
        const todoEditDate = document.querySelector(`#todoEditDate${todoIndex}`);
        todo.dueDate = todoEditDate.value;
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

function setupDefaults() {
    const defaultProject = new Project("Default", "This is the default project");
    const defaultTodo = new Todo("Test Todo", "Test Description", "2023-11-30", "Low");
    projects.push(defaultProject);
    defaultProject.todos.push(defaultTodo);
    displaySidebarContent(projects);
    displayProject(projects[0], projects);
    displayTodos(projects[0]);
}


export { createNewProject, setupDefaults, createNewTodo, editTodo, selectProject, deleteTodo, deleteProject, toggleTodoDetails, editProject };