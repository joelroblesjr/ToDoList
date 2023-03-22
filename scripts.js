document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!taskInput.value.trim()) return;
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});