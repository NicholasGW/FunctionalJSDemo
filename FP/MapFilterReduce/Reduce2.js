/*---------------------------------------------------------
 * Sort list into need and remove by values
 *---------------------------------------------------------*/
var createItem = function(type, value) {
  return { type: type,
           value: value
         };
}

var items = [ createItem('need', 2),
              createItem('remove', 0),
              createItem('remove', 2),
              createItem('need', 5)
            ];

var sorted = { 'need': [],
               'remove': []
             };

items.forEach(function(item) {

 sorted[item.type].push(item.value);

});

console.log(sorted.remove);
console.log(sorted.need);


//Object.assign Demo

var obj1 = { prop1: "test"};
var obj2 = { prop2: "test2"};
var obj3 = { prop1: "test3"};

console.log(Object.assign({}, obj1, obj2));
console.log(Object.assign({}, obj1, obj2, obj3))

/*---------------------------------------------------------
 * Now with reduce
 *---------------------------------------------------------*/

 var reduceItems = [ createItem('need', 2),
                     createItem('remove', 0),
                     createItem('remove', 2),
                     createItem('need', 5)
                   ];

var sortedByReduce = reduceItems.reduce(function(prev, item) {


    /* var mergeIn = {};
     * var addedVal = prev[item.type].concat[item.value]
     * mergeIn[item.type] = addedVal */

    var mergeIn = {[item.type]: prev[item.type].concat([item.value])};
    var merged = Object.assign({}, prev, mergeIn)

    return merged;


}, { need: [], remove: [] });

console.log(sortedByReduce.need);
console.log(sortedByReduce.remove);
