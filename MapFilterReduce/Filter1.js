/*---------------------------------------------------------
 * Filter anything less than 3
 *---------------------------------------------------------*/

var list = [0,5,2,7,4];

var filteredList = [];

list.forEach(function(item) {
  if (item >= 3) {
    filteredList.push(item);
  }
});

console.log(filteredList);


/*---------------------------------------------------------
 * With Filter
 *---------------------------------------------------------*/
var useFilter = list.filter(function(item) {
  return item >= 3;
});

console.log(useFilter);
