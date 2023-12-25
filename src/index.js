import "./style.css";

let objArr = [];
let project = 'home';
getDomNodes();
console.log(objArr);
function getDomNodes() {
    const addNewTaskButton = document.getElementById("addNewTaskButton");
    const addTaskInputForm = document.getElementById("addTaskInputForm");
    const addTaskInputFormButton = document.getElementById('addTaskInputFormButton');
    const homeProject = document.getElementById("homeProject");
    const addNewProjectButton = document.getElementById("addNewProjectButton");
    const newProjectInputForm = document.getElementById("newProjectInputForm");
    const newProjectInputFormButton = document.getElementById("newProjectInputFormButton");
    const editTaskInputFormButton = document.getElementById('editTaskInputFormButton');
    const editTaskInputForm = document.getElementById('editTaskInputForm');

    addTaskInputFormButton.addEventListener('click', () => {
        addTaskInputForm.style.display = "none";
        getTodo();
        const arrForRendering = objArr.filter(x => x.project == project)
        renderTodo(arrForRendering);
    });

    addNewTaskButton.addEventListener("click", () => {
        addTaskInputForm.style.display = "flex";
    });

    homeProject.addEventListener("click", () => {
        project = 'home';
        const arrForRendering = objArr.filter(x => x.project == 'home')
        renderTodo(arrForRendering);
        console.log(arrForRendering)
    });

    addNewProjectButton.addEventListener("click", () => {
        newProjectInputForm.style.display = "flex";
    });

    newProjectInputFormButton.addEventListener("click", () => {
        newProjectInputForm.style.display = "none";
        const projectName = getProjectName();
        if(projectName=="") return;
        renderProjectName(projectName);
    });

    editTaskInputFormButton.addEventListener("click", () => {
        editTaskInputForm.style.display = "none";
    });
}

class addTodo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = new Date().getTime();
    }
    deleteButton() {
    }
}

function getTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = "dummy2";
    const newTodo = new addTodo(title, description, dueDate, priority, project);
    objArr.push(newTodo);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    console.log(objArr);
    // render(arr);
}

function renderTodo(arr) {

    const content = document.getElementById('content');
    content.innerHTML = '';

    arr.forEach(arrElement => {

        const addTodoDivContainer = document.createElement('div');
        addTodoDivContainer.className = 'addTodoDivContainer';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'titleDiv';
        titleDiv.innerText = arrElement.title;
        addTodoDivContainer.appendChild(titleDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'descriptionDiv';
        descriptionDiv.innerText = arrElement.description;
        addTodoDivContainer.appendChild(descriptionDiv);

        const dueDateDiv = document.createElement('div');
        dueDateDiv.className = 'dueDateDiv';
        dueDateDiv.innerText = arrElement.dueDate;
        addTodoDivContainer.appendChild(dueDateDiv);

        const priorityDiv = document.createElement('div');
        priorityDiv.className = 'priorityDiv';
        priorityDiv.innerText = arrElement.priority;
        addTodoDivContainer.appendChild(priorityDiv);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'priorityDiv';
        deleteButton.innerText = arrElement.id;
        deleteButton.id = arrElement.id;
        addTodoDivContainer.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            objArr.splice(objArr.indexOf(arrElement), 1);
            const arrForRendering = objArr.filter(el => el.project == project)
            renderTodo(arrForRendering);
        })

        const editButton = document.createElement('button');
        editButton.className = 'priorityDiv';
        editButton.innerText = arrElement.id + "edit";
        editButton.id = arrElement.id;
        addTodoDivContainer.appendChild(editButton);
        editButton.addEventListener('click', () => {
            console.log(arrElement.id);
            const editObject = objArr.filter(x => x.id == arrElement.id);
            const editTaskInputForm = document.getElementById("editTaskInputForm");
            objArr.forEach(x => {
                if (x.id == editObject[0].id) {
                    const index = objArr.indexOf(editObject[0]);
                    editTaskInputForm.style.display = "flex";
                    document.getElementById("title").value = arrElement.title;
                    document.getElementById("description").value = arrElement.description;
                    document.getElementById("dueDate").value = arrElement.dueDate;
                    console.log(index);

                    console.log(objArr[index]);
                    objArr[index].title = document.getElementById("title").value;
                    objArr[index].description = document.getElementById("description").value;
                    objArr[index].dueDate = document.getElementById("dueDate").value;
                }
            });
            const arrForRendering = objArr.filter(x => x.project == project)
            renderTodo(arrForRendering);
        })

        content.appendChild(addTodoDivContainer);
    });
}

function getProjectName() {
    const projectName = document.getElementById("projectNameInput").value;
    document.getElementById("projectNameInput").value = "";
    return projectName;
}

function renderProjectName(projectName) {
    const sidebarProjectNames = document.getElementById("sidebarProjectNames");
    const x = document.createElement('div');
    x.className = 'sidebarProjectNames';
    x.innerText = projectName;
    sidebarProjectNames.appendChild(x);

    x.addEventListener('click', () => {
        project = projectName;
        const arrForRendering = objArr.filter(x => x.project == projectName)
        renderTodo(arrForRendering);
        console.log(arrForRendering)
    })
}
