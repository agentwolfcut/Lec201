const { template } = require("@babel/core")

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (!allItems) return undefined
  if(rowsPerPage <= 0 || currentPage <= 0) return allItems
  
  const showItems = allItems.slice( rowsPerPage * (currentPage - 1), rowsPerPage * currentPage)
  // check empty items by length
  if(showItems.length <= 0) return []
  
  return showItems
}
module.exports = getItemsOfCurrentPage
