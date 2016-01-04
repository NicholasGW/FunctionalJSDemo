var slicer = [1,2,3];
var splicer = [1,2,3];

console.log('Non destructive');

for ( var i = 0; i < 4 ; i++) {
  console.log(slicer.slice(0, 1));
  console.log(slicer);
}

console.log('Destructive');
for (var j=0; j < 4; j++) {
  console.log(splicer.splice(0,1));
  console.log(splicer);
}
