//Functions can take functions as arguments or return functions

var speak = function() {
  console.log("Hi!");
}

var runner = function(runMe) {
  runMe();
}

runner(speak);
//-> Hi!


var sayMyName = function(name) {
  return function() {
    console.log(name);
  }
}


var sayNick = sayMyName("Nick");

sayNick();
//-> Nick
