import '../style.css';

class Project {
    constructor(title = "Default", description = "") {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
}

class Todo extends Project {
    constructor(title, description = "", dueDate, priority = 1, notes = "") {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

//Setup defaults
const projects = [];
const defaultProject = new Project("Default", "This is the default project");
const defaultTodo = new Todo("Test Todo", "Test Description", "Today", 1, "Notes");
projects.push(defaultProject);
defaultProject.todos.push(defaultTodo);


const sidebar = document.querySelector('#sidebar');

function displaySidebarTodos(project, projectDiv) {
    project.todos.forEach((todo) => {
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'sideTodoDiv');
        projectDiv.appendChild(todoDiv);
        let todoTitle = document.createElement('h4');
        todoTitle.textContent = todo.title;
        todoTitle.setAttribute('class', 'sideTodoTitle');
        todoDiv.appendChild(todoTitle);
    });
}

function displaySidebarProjects(projects) {
    projects.forEach((project) => {
        //Populates projects
        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'sideProjectDiv');
        sidebar.appendChild(projectDiv);
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

displaySidebarProjects(projects);

// function displaySidebar() {
//     displaySidebarProjects(projects);
//     displaySidebarTodos(projects)
// }