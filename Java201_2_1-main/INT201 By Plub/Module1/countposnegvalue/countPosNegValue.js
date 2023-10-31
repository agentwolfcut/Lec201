const { template } = require("@babel/core")

// function countPosNegValue(posNegIntegerArray) {
//   // กรณี posNegIntegerArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
//   // กรณี posNegIntegerArray เป็น  0 ให้คืนค่าเป็น 1
//   if (!posNegIntegerArray) return undefined
//   // ! ถ้าข้อมูลเป็น undefined, null, 0, false, NaN จะเข้าเงื่อนไขทั้งหมด
//   // if (posNegIntegerArray === null) return undefined;
//   // if (posNegIntegerArray === 0) return 1;

//   // check empty array by array length
//   if (posNegIntegerArray.length <= 0) return {}

//   const object = {
//     positive: 0,
//     negative: 0,
//   }

//   for (const number of posNegIntegerArray) {
//     if (number > 0) {
//       object.positive++
//     }
//     if (number < 0) {
//       object.negative++
//     }
//   }

//   return object
// }

function countPosNegValue(posNegIntegerArray){
  if(!posNegIntegerArray) return undefined
  if(posNegIntegerArray.length <= 0) return {}
  
  const object = {
    positive : 0 , negative : 0
  }

  for(const number of posNegIntegerArray) {
    if (number > 0) {
      object.positive++
    }
    if ( number < 0 ) {
      object.negative++
    }
  }
  return object;
}

const posNegIntegerArray = [-3, 1, 12, 245, 87392, -2, -10230]
console.log(countPosNegValue(posNegIntegerArray))

module.exports = countPosNegValue
