// JavaScript logic for the todo application

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addTodoButton = document.getElementById('add-todo');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodo(index);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});