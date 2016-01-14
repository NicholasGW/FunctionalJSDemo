/*---------------------------------------------------------
 * Sort list into need and remove by values
 *---------------------------------------------------------*/

var items = [ 2, 12, 3, 5, 4, 2, 1, 5, 4, 15 ];


var sorted = { 'above': [],
               'equalOrBelow': []
             };

var predicate = 6;

items.forEach(function(item) {

if (item > predicate) {
  sorted.above.push(item);
} else {
  sorted.equalOrBelow.push(item);
}

});

console.log(sorted.above);
console.log(sorted.equalOrBelow);



/*---------------------------------------------------------
 * Now with reduce
 *---------------------------------------------------------*/

var reduceItems = [ 2, 12, 3, 5, 4, 2, 1, 5, 4, 15 ];


var splitByPredicate = function (arr, predicate) {

    return arr.reduce(function(prev, curr) {
      var appended;
      if (curr > predicate) {
         appended = prev.above.concat([curr]);
        return Object.assign({}, prev, {"above": appended});
      } else {
        appended = prev.equalOrBelow.concat([curr]);
        return Object.assign({}, prev, {"equalOrBelow": appended});
      }
    }, {"above": [], "equalOrBelow": []});
};

var sortedByReduce = splitByPredicate(reduceItems, 7);



console.log(sortedByReduce.above);
console.log(sortedByReduce.equalOrBelow);
