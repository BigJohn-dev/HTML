const todoInput = document.getElementById('todo-input');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const searchInput = document.getElementById('search-input');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let searchTerm = '';

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(filter = '') {
    todoList.innerHTML = '';
    tasks
        .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
        .forEach((task, idx) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                tasks[idx].completed = checkbox.checked;
                saveToLocalStorage();
                renderTasks(searchTerm);
            });

            const span = document.createElement('span');
            span.textContent = task.text;
            if (task.completed) {
                span.style.textDecoration = 'line-through';
                span.style.color = 'gray';
            }


            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.classList.add('delete-task');
            deleteButton.addEventListener('click', () => {
                tasks.splice(idx, 1);
                saveToLocalStorage();
                renderTasks(searchTerm);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
}

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    tasks.push({ text: taskText, completed: false });
    saveToLocalStorage();
    renderTasks(searchTerm);
    todoInput.value = '';
});


searchInput.addEventListener('input', function() {
    searchTerm = searchInput.value;
    renderTasks(searchTerm);
});

const btn = document.getElementById('toggleMode');
btn.onclick = () => {
    document.body.classList.toggle('dark-mode');
};

renderTasks();