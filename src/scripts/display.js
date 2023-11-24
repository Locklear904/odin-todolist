const sidebar = document.querySelector('#sidebar');
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

function displayTodos(project) {
    project.todos.forEach(todo => {
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todoDiv');
        main.appendChild(todoDiv);
        let todoTitle = document.createElement('h2');
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

export {displaySidebarContent, displayTodos};