const todoForms = document.querySelectorAll(".todo-form");

function handleFormSubmit(event) {
  event.preventDefault();
  const todoInput = this.querySelector(".todo-input");
  const task = todoInput.value.trim();

  if (task === "") return;

  addTaskToList(task, this.parentElement.querySelector(".todo-list"));
}

function addTaskToList(task, taskList) {
  const taskContainer = document.createElement('div');
  
  taskList.append(task, document.createElement("br"));
}

todoForms.forEach(form => form.addEventListener("submit", handleFormSubmit));

function getTaskContainer() {
  const taskContainer = document.createElement('div');
  taskContainer.insertAdjacentHTML('beforeend', "");
  const checkBox = document.createElement('input',);
}

