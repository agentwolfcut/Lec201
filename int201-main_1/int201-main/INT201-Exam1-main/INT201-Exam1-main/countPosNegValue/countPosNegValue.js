const { template } = require('@babel/core');
//Function ชื่อ countPosNegValue (posNegIntegerArray)
function countPosNegValue(posNegIntegerArray) {
  // กรณี posNegIntegerArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
  // กรณี posNegIntegerArray เป็น  0 ให้คืนค่าเป็น 1
  if (!posNegIntegerArray) return undefined;
  // ! ถ้าข้อมูลเป็น undefined, null, 0, false, NaN จะเข้าเงื่อนไขทั้งหมด
  // if (posNegIntegerArray === null ||posNegIntegerArray === undefined ) return undefined;
  // if (posNegIntegerArray === 0) return 1;

  // check empty array by array length
  // - กรณี posNegIntegerArray เป็น empty array [ ] ให้คืนค่าเป็น empty object { }
  if (posNegIntegerArray.length <= 0) return {};

  //- กรณี ไม่พบรายการตัวเลขที่เป็นจำนวนเต็มบวกและจำนวนเต็มลบ ให้คืนค่าเป็น {positive: 0, negative: 0}
  const object = {
    positive: 0,
    negative: 0,
  };

  for (const number of posNegIntegerArray) {
    if (number > 0) {
      object.positive++;
    }
    if (number < 0) {
      object.negative++;
    }
  }

  return object; //เพื่อ return object
}

const posNegIntegerArray = [-3, 1, 12, 245, 87392, -2, -10230];
console.log(countPosNegValue(posNegIntegerArray));

module.exports = countPosNegValue;




// const { template } = require('@babel/core')

//   function countPosNegValue(posNegIntegerArray) {
//     if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
//         return undefined
//     } else if (posNegIntegerArray.length === 0) return {}
  
//     let len = posNegIntegerArray.length;
//     let positiveCount = 0;
//     let negativeCount = 0;
    
  
//     for(let i = 0; i < len; i++)
//     {
//         if (posNegIntegerArray[i] > 0)
//         {
//             positiveCount++;
//         }
//         else if (posNegIntegerArray[i] < 0)
//         {
//             negativeCount++;
//         } 
       
//     }
//     const count = {};
//     if (positiveCount >= 0) count["positive"] = positiveCount;
//     if (negativeCount >= 0) count["negative"] = negativeCount;
//     return count;

// }
// module.exports = countPosNegValue
