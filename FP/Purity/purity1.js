var time = Date.now();

var bad = function(toAdd) {
  return time + toAdd;
};









var alsoBad = function(toAdd) {

  var time = Date.now();
  return time + toAdd;

};





var evil = function(val) {

  localStorage.myVal = val;
  return val * 2;

};





//Internal state,
//but doesn't expose implementation
//so less portable

var better = function(toAdd) {

   var time = 1;
   return time + toAdd;

};




//Pure...easy to test and
//has an "honest" API
var best = function(time, toAdd) {
  return time + toAdd;
};
