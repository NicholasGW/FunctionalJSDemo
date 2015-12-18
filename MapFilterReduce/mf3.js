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

 var extractValue = function(item) {
   return item.value + item.value2;
 }

 var doubleMe = function(value) {
   return value * 2;
 }

var filterPush = function(value, arr) {
  if (value < 8) {
    arr.push(value);
  }
}
 var items = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];

var outside = [];

var app = function(old, newArr) {

  old.forEach(function(item) {
    filterPush(doubleMe(extractValue(item)), newArr);
  });
  newArr.reverse();
}

app(items, outside)

console.log(outside);

/*---------------------------------------------------------
 * Map, Filter, Reduce
 *---------------------------------------------------------*/


 var mfrItems = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];


 var extractObj = function(item) {
   return { value: item.value + item.value2};
 };

 var doubleObj = function(item) {
   return {value: item.value * 2};
 };

 var objToArray = function(prev, curr) {
   return prev.concat([curr.value]);
 };

 var filter8 = function(value) {
   return value < 8;
 };

 var finished = mfrItems.map(extractObj)
                        .map(doubleObj)
                        .reduce(objToArray, [])
                        .filter(filter8)
                        .reverse();

 console.log(finished);
