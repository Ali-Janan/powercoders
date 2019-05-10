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
    todoList.todos.textTodo.push(text);
    this.displayTodos();
  },
  //change todos
  changeTodos: function (index, text) {
    todoList.todos[index].textTodo = text;
    this.displayTodos();
  },
  //deleteTodo
  deleteTodo: function (index, end) {
    todoList.todos.splice(index, end);
    this.displayTodos();
  },
  //TOGGLE COMPLETED KEY VALUE OF AN ITEM
  toggleCompleted: function (index) {
      let item = this.todos[index];
      item.completed = ! item.completed; 

      this.displayTodos();
  },

  toggleAll: function() {
    // 1 count how many are completed
    // 2 if there is one ucncompleted, complete all
    // 3 if all are completed or all uncompleted change them to completed or
    //    uncompleted respectivly
    var counter = 0; // to count how many are uncompleted that is false
    for (let i= 0; i < this.todos.length; i++) {
      if (this.todos[i].completed == false) {
        counter += 1;
      }
      
     
    } 
    console.log(counter);

    for (let i = 0; i < this.todos.length; i++) {
      if (counter > 1 ) { // if we have atleast one false which is uncomplete
        this.todos[i].completed = true;
      }else { // counter is zero, which means there is no one uncompleted or all are true
        this.todos[i].completed = !this.todos[i].completed;
      }
    } 
    this.displayTodos();
  }


};
/* object end here*/

todoList.displayTodos();

todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAll();

// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(2);
// todoList.toggleCompleted(3);

//-----------------------Loop----------------------------------
// for ( let i = 0; i<10; i++) {
//   console.log(" value of i : ", i)

// }


//-----------------------Booleans----------------------------------
 //== test for equality 
 //=== test for equality and datat type
 // ! bank operator

// var n = 1; 
// var bool = true; console.log("bool: ", bool);


// var compare = (n === bool); 
// console.log(compare);



// var weather = 'rain'; 

// if (weather == 'snow') {
//   console.log(" Take my umbrella "); 
// } 
// else if (weather == 'rain') {
// console.log("take rainy jacket")
// }
// else {
//   console.log(" Take my sun glass")
// }



//----------------------------------------------------------------
//console.log(myItem.textTodo, myItem.completed);

  // console.log();
  // console.log(todoList.todos[3].textTodo);
  // console.log(todoList.todos[3].completed);


//   //display todos
//   displayTodos: function() {
//     console.log(this.todos);
//   }, 
//   //add todo
//   addTodo: function(text) {
//     // debugger;
//     todoList.todos.push(text);
//     this.displayTodos();
//   }, 
//   //change todos
//   changeTodos: function(index, text) {
//     todoList.todos[index] = text;
//     this.displayTodos();
//   },
//   deleteTodo: function(index, end) {
//     todoList.todos.splice(index, end);
//     this.displayTodos();
//   },
// }; 
// //call the function from out side the 
// todoList.displayTodos();
// todoList.addTodo("forth");
// todoList.changeTodos(0,"zero");
// todoList.deleteTodo(0, 1);




// //object ------ inside object is array
// var todoList = {

//   // TODOS ARR
//   todos: [
//     {
//       text: "First item",
//       completed: false
//     },
//     {
//       text: "Second item",
//       completed: false
//     },
//     {
//       text: "Third item",
//       completed: true
//     },
//   ],


//   // DISPLAY TODOS
//   displayTodos: function () {
//     console.log(this.todos);
//   }

// };

// console.log(todoList.displayTodos());

// //----------------------------------


// var todos = ["first", "second", "third"];
// function displayTodos() {
//   //how to conect with array
//   console.log(todos);
// }

//--------------------------------------------------------------------------


//function add
// function addTodo(text) {
//   todos.push(text);
//   displayTodos(todos);
// }

// addTodo: function todoText() {

//   this.todos.push({
//     text: todoText, 
//     completed: false
//   }); 
//   this.displayTodos();
// }

// todoList.displayTodos(); 
// todoList.addTodo("Forth item");





// //how to call a add function
// displayTodos(todos);
// addTodo("forth");
// addTodo("fifth");

// todos[0] = "zero";
// displayTodos(todos);

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


