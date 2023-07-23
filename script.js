// Retrieve taskList from localStorage if available
let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];

        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${i})">Edit</button>
      <button onclick="deleteTask(${i})">Delete</button>
    `;

        taskListElement.appendChild(listItem);
    }

    // Save updated taskList to localStorage
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        taskList.push(taskText);
        newTaskInput.value = '';
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt('Edit the task:', taskList[index]);

    if (newTaskText !== null) {
        taskList[index] = newTaskText.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
