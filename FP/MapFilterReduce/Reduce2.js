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

    var toReturn = prev;

    toReturn[item.type] = toReturn[item.type].concat([item.value]);

    return toReturn;

}, { need: [], remove: [] });

console.log(sortedByReduce.remove);
console.log(sortedByReduce.need);
