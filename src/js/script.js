const inputNewTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasksList = document.querySelector('.tasks');

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');


    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-delete');
    deleteButton.innerText = 'Excluir';
    deleteButton.setAttribute('title', 'Excluir tarefa');

    li.appendChild(textSpan);
    li.appendChild(deleteButton);
    tasksList.appendChild(li);
}

function handleAddTask() {
    const taskText = inputNewTask.value.trim();
    if (taskText === '') return;
    
    createTaskElement(taskText);
    inputNewTask.value = '';
    inputNewTask.focus();
    saveTasks();
}

btnAddTask.addEventListener('click', handleAddTask);

inputNewTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleAddTask();
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('btn-delete')) {
        el.closest('.task-item').remove();
        saveTasks();
    }
});

function saveTasks() {
    const taskItems = tasksList.querySelectorAll('.task-item');
    const tasksArray = [];

    for (let item of taskItems) {

        const taskText = item.querySelector('.task-text').innerText;
        tasksArray.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', tasksJSON);
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (!savedTasks) return;

    const tasksArray = JSON.parse(savedTasks);
    for (const taskText of tasksArray) {
        createTaskElement(taskText); 
    }
}

loadTasks();
