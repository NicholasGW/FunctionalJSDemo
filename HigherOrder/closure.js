var multiply = function(x, mult) {
  return x * mult;
}


console.log(multiply(2,3));


var createMult = function(mult) {

  return function(x) {
    return x * mult;
  }
}


var mult3 = createMult(3);

console.log(mult3(2));
