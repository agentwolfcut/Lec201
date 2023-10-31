const { template } = require('@babel/core');

function totalPages(arrayItems, rowsPerPage) {
  if (!arrayItems) return undefined;
  if (!rowsPerPage) return 1;

  return Math.ceil(arrayItems.length / rowsPerPage);
}

console.log(totalPages(new Array(35), 15));
console.log(totalPages(new Array(10), 20));
console.log(totalPages(new Array(40), 10));
console.log(totalPages(new Array(25), 0));
console.log(totalPages(new Array(25), null));
console.log(totalPages(new Array(25), undefined));
console.log(totalPages(null, 20));
console.log(totalPages(undefined, 20));

module.exports = totalPages;

