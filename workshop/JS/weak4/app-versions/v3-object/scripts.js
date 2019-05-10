//object ------ inside object is array
var todoList = {

  // TODOS ARR
  todos: [
    {
      text: "First item",
      completed: false
    },
    {
      text: "Second item",
      completed: false
    },
    {
      text: "Third item",
      completed: true
    },
  ],
  
  
  // DISPLAY TODOS
  displayTodos: function () {
    console.log(this.todos);
  }

};

console.log(todoList.displayTodos());

//----------------------------------


var todos = ["first", "second", "third"];
function displayTodos() {
  //how to conect with array
  console.log(todos);
}

//--------------------------------------------------------------------------


//function add
function addTodo(text) {
  todos.push(text);
  displayTodos(todos);
}

addTodo: function todoText() {

  this.todos.push({
    text: todoText, 
    completed: false
  }); 
  this.displayTodos();
}

todoList.displayTodos(); 
todoList.addTodo("Forth item");





// //how to call a add function
// displayTodos(todos);
// addTodo("forth");
// addTodo("fifth");

// todos[0] = "zero";
// displayTodos(todos);

// //change a function
// function changeTodos(change) {
//   todos[0] = "new text";
//   displayTodos(todos);
// }
// //call the change
// changeTodos(2);

// //delete a function hardcore
// function deleteTodo() {
//   todos.splice(0, 1);

//   displayTodos(todos);
// }
// //call a funtion
// deleteTodo();

// //delete a fucntion softcode
// function deleteTodo(index, end) {
//   todos.splice(index, end);
//   displayTodos();
// }

// deleteTodo(1, 1);

// //cammant
// /**
//  * asödlkfj 
//  * asdflkj 
//  * 
//  */
// //---------------------------Object----------------------------

// var myObject = {
//   name: "Sorin",
//   dog: false,
//   cat: true
// }