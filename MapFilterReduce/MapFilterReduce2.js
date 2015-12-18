/*---------------------------------------------------------
 * Combine values, Multiply value by 2, filter all objects with value < 8, then reverse it.
 *---------------------------------------------------------*/
 Array.prototype.logger = function() {
   console.log(this);
   return this;
 }

 var createItem = function(value,value2) {
   return { value: value, value2: value2 };
 };

 var items = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];

var newItems = [];

items.forEach(function(item) {

  var value = (item.value + item.value2) * 2;
  if(value < 8) {
    newItems.push(value);
  }
});

newItems.reverse();

console.log(newItems);

/*---------------------------------------------------------
 * Map, Filter, Reduce
 *---------------------------------------------------------*/


 var mfrItems = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];

 var finished = mfrItems.map(function(item) {
   var value = item.value + item.value2;
   return { value: value };
 }).map(function(item) {
   return { value: item.value * 2};
 }).reduce(function(prev,curr) {
   return prev.concat([curr.value]);
 }, []).filter(function(value) {
   return value < 8;
 }).reverse();

 console.log(finished);
