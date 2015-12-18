var asyncFunc = function(seconds) {

  var asyncCall = new Promise(function(resolve) {

    setTimeout(resolve, seconds, seconds);
  });

  return asyncCall;
}



var http1 = asyncFunc(1000).then(function(seconds) {
  console.log(seconds);
});

var http2And3 = asyncFunc(1000).then(function(seconds) {
  console.log(seconds);
  return asyncFunc(1000 + seconds);
}).then(function(success) {
  console.log(success);
})
