const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});
