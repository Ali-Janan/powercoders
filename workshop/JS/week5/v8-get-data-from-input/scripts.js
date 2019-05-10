/**
 * TO DO LIST OBJECT
 * Methods to manage the todo list
 */
//My Object 
var todoList = {
  // it do one work (text). lets make it object in the next line
  // todos: [ "First", "Second", "Third"], 

  // object in array = array of object
  todos: [
    //one obj
    {
      textTodo: "First",
      completed: true
    },
    //second obj
    {
      textTodo: "Second",
      completed: false
    },
    //third obj
    {
      textTodo: "Third",
      completed: false
    },
    {
      textTodo: "forth",
      completed: true
    }
  ],
  displayTodos: function () {
    //start loop
    for (let i = 0; i < todoList.todos.length; i++) {
      var myItem = todoList.todos[i];
      var x = ' ';
      if (myItem.completed) {
        x = 'x';
        var x = (myItem.completed) ? 'x' : ' ';
      }
      var showItem = '( ' + x + ' ) ' + myItem.textTodo;
      console.log(showItem);
    }
    console.log("-----------------------------");

  },
  //add todo
  addTodo: function (text) {
    // debugger;
    todoList.todos.push({textTodo:text});
    this.displayTodos();
  },
  //change todos
  changeTodos: function (index, text) {
    todoList.todos[index].textTodo = text;
    this.displayTodos();
  },
  //deleteTodo
  deleteTodo: function (index) {
    todoList.todos.splice(index, 1);
    this.displayTodos();
  },
  //TOGGLE COMPLETED KEY VALUE OF AN ITEM
  toggleCompleted: function (index) {
    let item = this.todos[index];
    item.completed = !item.completed;

    this.displayTodos();
  },

  toggleAll: function () {
    // 1 count how many are completed
    // 2 if there is one ucncompleted, complete all
    // 3 if all are completed or all uncompleted change them to completed or
    //    uncompleted respectivly
    var counter = 0; // to count how many are uncompleted that is false
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed == false) {
        counter += 1;
      }

    }
    console.log(counter);

    for (let i = 0; i < this.todos.length; i++) {
      if (counter > 1) { // if we have atleast one false which is uncomplete
        this.todos[i].completed = true;
      } else { // counter is zero, which means there is no one uncompleted or all are true
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
    this.displayTodos();
  }
};
/* object 1 end here*/
//--------------------------------------------------

/**
 * HANDLERS OBJECT
 * Method to handle the DOM EVENTS
 */
var handlers = {
  addTodo: function () {
    var addTodoInput = document.getElementById("addTodoInput");
    var text = addTodoInput.value;

    todoList.addTodo(text);
  },
  changeTodo: function () {
    var changeTodoInput = document.getElementById("changeTodoInput");
    var text = changeTodoInput.value;

    var changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
    var index = changeTodoIndexInput.value;

    todoList.todos[index].textTodo = text;
  },
  deleteTodo: function () {
    var deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput").value;
    console.log(deleteTodoIndexInput);
    if (deleteTodoIndexInput >= 0) {
      todoList.deleteTodo(deleteTodoIndexInput);
    }
  },
  toggleAll: function () {
    var toggleTodoIndexInput = document.getElementById("toggleTodoIndexInput");
    todoList.toggleAll();
   
  }
};


//-------------------------------------------------------
