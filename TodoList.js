const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Drink food',
  dueDate: '27-06-26'
}, {
  name: 'Play water',
  dueDate: '25-06-26'
}];
randderTodoList();
function randderTodoList() {

  let todoHtml = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    // const {dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="js-delete-todo-btn delete-todo-btn">
     Delete
    </button>`;
    todoHtml += html;
  })
  // console.log(todoHtml);

  document.querySelector('.displayTodos').innerHTML = todoHtml;

  document.querySelectorAll('.js-delete-todo-btn').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1)
      randderTodoList();
    })
  })
}

document.querySelector('.js-add-btn')
  .addEventListener('click', () => {
    addTodo();
  });
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
})
function addTodo() {
  const todoElement = document.querySelector('.js-input');
  const dueDateElement = document.querySelector('.js-dates');
  const name = todoElement.value;
  const dueDate = dueDateElement.value;
  // console.log(name);
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });
  // console.log(todoList);
  todoElement.value = '';
  for (let index = 0; index <= todoList.length - 1; index++) {
    const itemsTodo = todoList[index];
    // console.log(itemsTodo);
  }
  document.querySelector('.displayTodos').innerHTML =
    '';
  randderTodoList();
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
