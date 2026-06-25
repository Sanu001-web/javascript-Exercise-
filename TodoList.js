const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Drink food',
  dueDate: '27-06-26'
},{
  name: 'Play water',
  dueDate: '25-06-26'
}];
randderTodoList();
function randderTodoList() {

  let todoHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    const { name, dueDate } = todoObject;
    // const {dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick=
    "todoList.splice(${i},1)
    randderTodoList();
    saveToStorage()
    " class="js-delete-btn">
    Delete
    </button>
    `
    todoHtml += html;
  }
  // console.log(todoHtml);

  document.querySelector('.displayTodos').innerHTML = todoHtml;
}

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
