var asyncFunc = function(seconds) {

  return function() {
    var asyncCall = new Promise(function(resolve) {

      setTimeout(resolve, seconds, "Resolved after: " + seconds + " milliseconds.");
    });


    return asyncCall;
  }
}

var makeTheCall = asyncFunc(1000);

makeTheCall().then(function(success) {
  console.log(success);
});
