const { template } = require('@babel/core');

// ข้อ 1. ให้เขียน Function ชื่อ countCovidStatus (covidStatusArray) เพื่อ return object 
function countCovidStatus(covidStatusArray) {
  //อยู่ในพารามิเตอร์ covidStatusArray
  // check array is undefined or null
  //- กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
  if (!covidStatusArray) return undefined;
  // if (covidStatusArray  === undefined ) return undefined;
  // check empty array by length
  //- กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }
  if (covidStatusArray.length <= 0) return {};

  let low = 0;
  let high = 0;
  let positive = 0;

  //ซึ่งมี 3 สถานะ ได้แก่ 'negative and low risk', 'negative and high risk', 'positive' (case sensitive)
  for (const status of covidStatusArray) {
    if (status === 'negative and low risk') {
      low++;
    }
    if (status === 'negative and high risk') {
      high++;
    }
    if (status === 'positive') {
      positive++;
    }
  }

  // new object with empty object
  const object = {};
  // check if low variable more than 0 set object['negative and low risk'] to low variable
  if (low > 0) object['negative and low risk'] = low;
  if (high > 0) object['negative and high risk'] = high;
  if (positive > 0) object['positive'] = positive;

  return object; //เพื่อ return object
}

// test case
const covidStatusArray = ['positive', 'negative and low risk', 'positive'];
console.log(countCovidStatus(covidStatusArray));

module.exports = countCovidStatus;




// function countCovidStatus(covidStatusArray) {
//   if (covidStatusArray === null || covidStatusArray === undefined){
//     return undefined;
//   } else if (covidStatusArray.length === 0) {
//     return {};
//   }
//   let negLow = 0;
//   let negHigh = 0;
//   let pos = 0;
//   for (const status of covidStatusArray) {
//     switch (status) {
//       case "negative and low risk":
//         negLow++;
//         break;
//       case "negative and high risk":
//         negHigh++;
//         break;
//       case "positive":
//         pos++;
//         break;
//     }
//   }
//   // build object
//   const covidStatus = {};
//   if (negLow > 0) covidStatus["negative and low risk"] = negLow;
//   if (negHigh > 0) covidStatus["negative and high risk"] = negHigh;
//   if (pos > 0) covidStatus["positive"] = pos;
//   return covidStatus;
// }


