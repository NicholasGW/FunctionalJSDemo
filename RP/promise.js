var promise = new Promise(function(resolve, reject) {

  var rand = Math.floor(Math.random() + 0.5);

  rand === 0 ? resolve("Resolved!") : reject("Rejected!")
});


promise.then(function(success) {
  console.log(success);
}, function(error) {
  console.log(error);
})
