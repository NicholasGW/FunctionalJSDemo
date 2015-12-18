//Relies on Global State
var time = Date.now();

var bad = function(toAdd) {
  return time + toAdd;
}


//Impure!
var alsoBad = function(toAdd) {

  var time = Date.now();
  return time + toAdd;

}

//Pure...easy to test and has an "honest" API
var great = function(time, toAdd) {
  return time + toAdd;
}
