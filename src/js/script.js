const inputNewTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

const createTask = (textInput) => {
    if (textInput === '') return; 
    displayTask(textInput);
    cleanInput();
    saveTask()
}

btnAddTask.addEventListener('click', function() {
    if (!inputNewTask) return;
    createTask(inputNewTask.value);
});

const displayTask = (showingTask) => {
    const li = createLi();
    li.innerText = showingTask;
    tasks.appendChild(li);
    cleanBtn(li)
}

const createLi = () => {
    const li = document.createElement('li');
    return li;
}

// captura cliques da tecla 'Enter'
inputNewTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputNewTask) return;
        createTask(inputNewTask.value);
        cleanInput()
    }
})

const cleanInput = () => {
    inputNewTask.value = ''; 
    inputNewTask.focus();
}

cleanBtn = (li) => { // botão de apagar
    li.innerText += ' ';
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Apagar';
    deleteButton.setAttribute('class', 'dell');
    deleteButton.setAttribute('title', 'deletar tarefa')
    li.appendChild(deleteButton);
}

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('dell'))  {
        el.parentElement.remove();
        saveTask()
    }
});

const saveTask = () => {
    const litasks = tasks.querySelectorAll('li')
    const taskList = [];
    for(let tasks of litasks) {
        let taskText = tasks.innerText.slice(0,-7);
        taskText = tasks.innerText.replace('Apagar', '').trim()
        taskList.push(taskText)
    }

    // Convertendo array em string com JSON
    const tasksInJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksInJSON) // local do navegador para salvar dados
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const taskList = JSON.parse(tasks); // volta a String para array
    for (let tasks  of taskList) {
        createTask(tasks)
    }
}

addSavedTasks()



