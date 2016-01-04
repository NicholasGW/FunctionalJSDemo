var multiply = function(x, multiplier) {
  return x * multiplier;
}


console.log(multiply(2,3));


var createMultiplier = function(multiplier) {

  return function(x) {
    return x * multiplier;
  }
}


var multiplyBy3 = createMultiplier(3);

console.log(multiplyBy3(2));
