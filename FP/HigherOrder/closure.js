var multiply = function(x, mult) {
  return x * mult;
}


console.log(multiply(2,3));


var createMultiplier = function(mult) {

  return function(x) {
    return x * mult;
  }
}


var mult3 = createMultiplier(3);

console.log(mult3(2));
