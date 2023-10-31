const { template } = require('@babel/core')

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
   //- กรณี allItems เป็น null หรือ undefined ให้ return เป็น undefined
   if (!allItems) return undefined;
   //- กรณี คำนวณแล้วไม่มีจำนวน items ของ page ที่ระบุ หรือ กรณี allItems เป็น empty array [ ] ให้ return เป็น empty array [ ]
   if (rowsPerPage <= 0 || currentPage <= 0) return allItems;
   //- กรณี rowsPerPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
   //- กรณี currentPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
   const showItems = allItems.slice(rowsPerPage * (currentPage - 1), rowsPerPage * currentPage);
   // check empty items by length
   if (showItems.length <= 0) return [];
 
   return showItems;
  
}

console.log (getItemsOfCurrentPage(20, 1, 4))
module.exports = getItemsOfCurrentPage
