const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskText => {
    createTask(taskText);
  });
}

// Function to create a task element and append it to the list
function createTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll('li');
  taskItems.forEach(item => {
    tasks.push(item.textContent.replace('Delete', '').trim()); // Remove 'Delete' text
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for adding a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = ""; // Clear the input field
    saveTasks(); // Save tasks to localStorage
  } else {
    alert('Please enter a task!');
  }
});

// Event listener for pressing 'Enter' to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);
