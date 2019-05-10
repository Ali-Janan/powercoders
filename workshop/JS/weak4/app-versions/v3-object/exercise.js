//GLOBAL SCOPE

//VARIABLES
var aString = "This is a string";
var iNumber = 23; 
var aBoolean = true; 
var anArray = [];
var anObject = {};
var aFunction = function() {
};
//------------------------------------------------------------------
//ARRAY
var myArray = ["String", 33, [1, 2, 3, ], {}];
//call the arry
myArray[1]; 
myArray.push("dada");
myArray.length;
//-----------------------------------------------------------------

//FUNCTIONS
function addTodo() {
  //whatever code
  // var bob = 3;
}

var addTodoOther = function() {
//whatever code
//LOCAL SCOPE
addTodo();

//console.log(bob); // not posible to see
//console.log(addTodo.bob);// can see
}
//call the function
addTodo();
addTodoOther();

//Display name as a function
function name() {
console.log("Marc");
console.log(2+2);
}
//call this function
name();

function name(theName, theAge) {
  console.log(theName, " ", theAge);
}
 name("Mark", 22);
 name("Ali", 44);
//-------------------------------------------------------------------------

//OBJECT
var car = {
  make: "Volvo", 
  model: "V70", 
  color: "red",

  //method
  moreInfo: function(myArg) {
    // var html = " "; 
    // html += "<a> Blas</a>"; 
    // html += "<a> Dada</>"
    // return html;
    return car.color;
  }
}
//call the function
console.log(car.make);
console.log(car.model);
console.log(car.color);