/*---------------------------------------------------------
 * Combine values into single property,
 * extract values,
 * multiply values by 2,
 * filter all values < 8,
 * then reverse them.
 *---------------------------------------------------------*/
 Array.prototype.logger = function() {
   console.log(this);
   return this;
 };

 var createItem = function(value,value2) {
   return { value: value, value2: value2 };
 };

 var combineValues = function(item) {
   return {singleValue : item.value + item.value2 };
 };

var extractValue = function(item) {
  return item.singleValue;
};

 var doubleMe = function(value) {
   return value * 2;
 };

var filterPush = function(value, arr) {
  if (value < 8) {
    arr.push(value);
  }
};

 var items = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];

var newList = [];

var app = function(oldArr, newArr) {

  oldArr.forEach(function(item) {
    filterPush(doubleMe(extractValue(combineValues(item))), newArr);
  });
  newArr.reverse();
};

app(items, newList);

console.log(newList);

/*---------------------------------------------------------
 * Map, Filter, Reduce
 *---------------------------------------------------------*/


 var mfrItems = [ createItem(2,2),
               createItem(4,4),
               createItem(6,6),
               createItem(1,1),
               createItem(2,1)
             ];


var combineVal = function(item) {
  return { singleValue: item.value + item.value2 }
}

 var extractVal = function(item) {
   return item.singleValue;
 };

 var doubleVal = function(value) {
   return value * 2
 };

 var filter8 = function(value) {
   return value < 8;
 };

 var finished = mfrItems.map(combineVal)
                        .map(extractVal)
                        .map(doubleVal)
                        .filter(filter8)
                        .reverse();

 console.log(finished);
