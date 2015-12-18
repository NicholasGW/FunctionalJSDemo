/*---------------------------------------------------------
 * Sum a list
 *---------------------------------------------------------*/

 var toSum = [1,2,3];
 var sum = 0;

 toSum.forEach(function(item) {
   sum += item;
 });

console.log(sum);
 /*---------------------------------------------------------
  * Reduce
  *---------------------------------------------------------*/

var summed = toSum.reduce(function(prev, item) {
  return prev + item
}, 0);

console.log(summed);
