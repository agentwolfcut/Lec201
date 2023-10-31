const { template } = require('@babel/core');

//Function ชื่อ getItemsOfCurrentPage (allItems, currentPage, rowsPerPage)
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

module.exports = getItemsOfCurrentPage;




// const status = ["negative and low risk", "negative and high risk", "positive"]

// //arrow function
// const countCovidStatus = (covidStatusArray) => {
//   if (covidStatusArray === null || covidStatusArray === undefined) {
//     return undefined
//   } else if (covidStatusArray.length === 0) {
//     return {}
//   }

//   const result = {}
//   for (const entry of covidStatusArray) {
//     if (status.includes(entry)) {
//       if (result[entry] === undefined) {
//         result[entry] = 1
//       } else result[entry]++
//     }
//   }
//   return result
// }
