const inputNewTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

const createTask = (textInput) => {
    if (textInput === '') return; 
    displayTask(textInput);
    cleanInput();
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

// captura cliques na tecla 'Enter'
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

cleanBtn = (li) => {
    li.innerText += ' ';
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Apagar';
    deleteButton.setAttribute('class', 'dell');
    deleteButton.setAttribute('title', 'deletar tarefa')
    li.appendChild(deleteButton);
}

document.addEventListener('click', function(e) {
    const el = e.target
    console.log('teste')
    if (el.classList.contains('dell'))  {
        el.parentElement.remove();
    }

});






