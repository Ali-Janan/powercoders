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

  //add todo
  addTodo: function (text) {
    // debugger;
    todoList.todos.push({ textTodo: text });
    view.displayTodos();
  },
  //change todos
  changeTodos: function (index, text) {
    todoList.todos[index].textTodo = text;
    view.displayTodos();
  },
  //deleteTodo
  deleteTodo: function (index) {
    todoList.todos.splice(index, 1);
    view.displayTodos();
  },
  //TOGGLE COMPLETED KEY VALUE OF AN ITEM
  toggleCompleted: function (index) {
    let item = this.todos[index];
    item.completed = !item.completed;
    view.displayTodos();
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

    for (let i = 0; i < this.todos.length; i++) {
      if (counter > 1) { // if we have atleast one false which is uncomplete
        this.todos[i].completed = true;
      } else { // counter is zero, which means there is no one uncompleted or all are true
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
    view.displayTodos();
  }
};

//---------------------object 1 end here-----------------------------

/**
 * HANDLERS OBJECT
 * Method to handle the DOM EVENTS
 */
var handlers = {
  addTodo: function () {
    var addTodoInput = document.getElementById("addTodoInput");
    var text = addTodoInput.value;
    addTodoInput.value = "";

    todoList.addTodo(text);
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoInput = document.getElementById("changeTodoInput");
    var text = changeTodoInput.value;


    var changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
    var index = changeTodoIndexInput.value;
    changeTodoIndexInput.value = "";
    todoList.todos[index].textTodo = text;
    changeTodoInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");
    todoList.deleteTodo(deleteTodoIndexInput);  
    deleteTodoIndexInput.value = "";
  },
  toggleAll: function () {
    var toggleTodoIndexInput = document.getElementById("toggleTodoIndexInput");
    todoList.toggleAll();
    view.displayTodos();
    toggleTodoIndexInput.value = "";

  }
};

/**
 * VIEW OBJECT
 * Methods to VIEW THE DOM ELEMENTS */
//-------------------------------------------------------

var view = {
  displayTodos: function () {

    const todoUL = document.querySelector("ul");
    todoUL.innerHTML = "";

    //start the loop
    for (let i = 0; i < todoList.todos.length; i++) {

      let todo = todoList.todos[i];
      //completed itme
      let x = "( ) ";

      if (todo.completed === true) {
        x = "(x) ";
      }
      // put together completed state and the text
      let displayTodoItem = (i+1) + ". " + x + todo.textTodo;

      console.log(displayTodoItem);

      // CREATE LI ELEMENT
      let todoLi = document.createElement("li");
      todoLi.textContent = displayTodoItem;

      // 6. create the button element
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('id', i);
      deleteBtn.textContent = 'X';

      //append the button to the 
      todoLi.appendChild(deleteBtn);

      //APPEND THE LI TO THE UL LIST
      todoUL.appendChild(todoLi); //


    } // end loop
  }

};

view.displayTodos();


//--------------------------------------------------------------
// how to write in js instead of writing in html

// //1. Create the element 
// let section = document.createElement("section");

// //1.1 Some conentes...
// let sectionContent = "";
// sectionContent += " <h1> Section title </h1> ";
// section.setAttribute('id', "my-section");
// section.setAttribute('class', "section");
// section.setAttribute('style', "color: red;");

// sectionContent += '<div id="top">'; 
// sectionContent += " DIV bottom content... ";
// sectionContent += "</div>";

// sectionContent += '<div id="top">'; 
// sectionContent += " DIV bottom content... ";
// sectionContent += "</div>";

// //1.2 Put the content inside the section
// section.textContent = sectionContent;
// //2. The Target Element
// const mainElem = document.querySelector("main");

// //3. Append Child
// mainElem.appendChild(section);
