const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deletTodo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id, 10);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintTodo(text) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  deleteButton.innerHTML = 'X';
  deleteButton.addEventListener('click', deletTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    parsedTodos.forEach((toDo) => paintTodo(toDo.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}
init();
