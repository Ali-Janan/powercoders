var todos = ["first", "second", "third"];

function displayTodos () {
  //how to conect with array
console.log(todos);
}
 //function add
function addTodo (text) {
  todos.push(text);
  displayTodos(todos);
}
//how to call a add function
displayTodos(todos);
addTodo("forth");
addTodo("fifth");

todos[0] = "zero";
displayTodos(todos);

//change a function
function changeTodos(change) {
  todos[0] = "new text";
  displayTodos(todos);
}
//call the change
changeTodos(2);

//delete a function hardcore
function deleteTodo() {
  todos.splice(0,1);
 
  displayTodos(todos);
}
//call a funtion
deleteTodo();

//delete a fucntion softcode
function deleteTodo (index, end) {
  todos.splice(index, end);
  displayTodos();
}

deleteTodo(1, 1);

//cammant
/**
 * asödlkfj 
 * asdflkj 
 * 
 */
