  const todoList = ['watch movie', 'second'];
  randderTodoList();
  function randderTodoList(){

  let todoHtml = '';
  for (let i = 0; i <= todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoHtml += html;
  }
  console.log(todoHtml);
  document.querySelector('.displayTodos').innerHTML = todoHtml;
  }

function addTodo() {
  const todoElement = document.querySelector('.js-input');
  const name = todoElement.value;
  // console.log(name);
  todoList.push(name);
  console.log(todoList);
  todoElement.value = '';
  for (let index = 0; index <= todoList.length - 1; index++) {
    const itemsTodo = todoList[index];
    // console.log(itemsTodo);
  }
  document.querySelector('.displayTodos').innerHTML =
    '';
   randderTodoList();
}
