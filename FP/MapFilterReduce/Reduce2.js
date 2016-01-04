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

    return Object.assign({}, prev, mergeIn);


}, { need: [], remove: [] });

console.log(sortedByReduce.remove);
console.log(sortedByReduce.need);
