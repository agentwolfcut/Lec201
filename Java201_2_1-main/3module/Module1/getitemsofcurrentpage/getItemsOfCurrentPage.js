const { template } = require('@babel/core')

//Function ชื่อ getItemsOfCurrentPage (allItems, currentPage, rowsPerPage)
// function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
//   //- กรณี allItems เป็น null หรือ undefined ให้ return เป็น undefined
//   if (!allItems) return undefined;
//   //- กรณี คำนวณแล้วไม่มีจำนวน items ของ page ที่ระบุ หรือ กรณี allItems เป็น empty array [ ] ให้ return เป็น empty array [ ]
//   if (rowsPerPage <= 0 || currentPage <= 0) return allItems;
//   //- กรณี rowsPerPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
//   //- กรณี currentPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
//   const showItems = allItems.slice(rowsPerPage * (currentPage - 1), rowsPerPage * currentPage);
//   // check empty items by length
//   if (showItems.length <= 0) return [];

//   return showItems;
// }

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage){
    if(!allItems) return undefined
    
    if(rowsPerPage <= 0) return allItems
    if(currentPage <= 0) return allItems

    const showItems = allItems.slice(rowsPerPage * (currentPage - 1), 
    rowsPerPage*currentPage) 

    // Items currentPage 1 rowsPerPage 5 [0,5] 0 1 2 3 4 ไม่เอาตัวท้ายสุด (5)
    // Items currentPage 2 rowsPerPage 5 [5,10] 5 6 7 8 9 ไม่เอาตัวท้ายสุด (10)

    
    return showItems.length > 0 ? showItems : []
}

module.exports = getItemsOfCurrentPage
