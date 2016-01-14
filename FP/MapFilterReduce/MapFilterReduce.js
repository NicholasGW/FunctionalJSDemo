/*---------------------------------------------------------
 * Multiply an object value by 2, filter all objects with value < 6, reduce into a list of values, then reverse it.
 *---------------------------------------------------------*/

 var createItem = function(value) {
   return { value: value };
 };

 var items = [ createItem(2),
               createItem(4),
               createItem(6),
               createItem(1),
               createItem(3)
             ];

var newItems = [];

items.forEach(function(item) {

  var mult = createItem(item.value * 2);

  if(mult.value < 6) {
    newItems.push(mult.value);
  }
});

newItems.reverse();

console.log(newItems);

/*---------------------------------------------------------
 * Map, Filter, Reduce
 *---------------------------------------------------------*/


 var mfrItems = [ createItem(2),
                  createItem(4),
                  createItem(6),
                  createItem(1),
                  createItem(3)
                ];

var finishedItems = mfrItems.map(function(item) {
   return createItem(item.value * 2);

}).filter(function(item) {

  return item.value < 6;

}).reduce(function(prev, item) {

  return prev.concat([item.value]);
  
}, []).reverse();

 console.log(finishedItems);
