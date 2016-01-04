var getApiData = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds, [1,4,5,2,1,3]);
  })
};


var doubleMe = function(value) {
  return value * 2;
};

var filter3 = function(value) {
  return value <= 3;
}

var summer = function(sum, curr) {
  return sum + curr;
}


var doItAll = function(arr) {
  console.log(arr.map(doubleMe)
                 .filter(filter3)
                 .reduce(summer,0));
}

getApiData(1000).then(doItAll);
