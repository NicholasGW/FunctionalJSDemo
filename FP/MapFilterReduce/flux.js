//Flux + React

//Impure
var Action = function() {

  return ["Hi", "User Data!"];

}

//Pure All The Way
var ReactComponents = function(item) {
  return "***" + item + "***";
}

//Impure
var ReactRender = function(item) {
  console.log(item);
}


var app = ActionStore().map(ReactComponents).map(ReactRender);
