/*---------------------------------------------------------
 * Multiply a list by 2
 *---------------------------------------------------------*/

var list = [1,2,3];

for (var i = 0; i < list.length; i++) {
  list[i] = list[i] * 2;
}

console.log(list);

/*---------------------------------------------------------
 * Or more elegantly
 *---------------------------------------------------------*/

list = [1,2,3];

list.forEach(function(item, index) {
  list[index] = item * 2;
});

console.log(list);


/*---------------------------------------------------------
 * Use map
 *---------------------------------------------------------*/

list = [1,2,3];

var newList = list.map(function(item) {
  return item * 2;
});

console.log(list);
console.log(newList);
