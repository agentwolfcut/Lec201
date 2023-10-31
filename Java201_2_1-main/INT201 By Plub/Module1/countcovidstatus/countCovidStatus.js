
  /*
  - covidStatusArray = null return undefined
  - covidStatusArray = undefined return undefined */

// const status = ["negative and low risk", "negative and high risk", "positive"]

//arrow function
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

// console.log(countCovidStatus)

//BestZige
function countCovidStatus(covidStatusArray) {
  // check array is undefined or null
  if (!covidStatusArray) return undefined;
  // check empty array by length
  if (covidStatusArray.length <= 0) return {};

  let low = 0;
  let high = 0;
  let positive = 0;
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

  return object;
}

// test case
const covidStatusArray = ['positive', 'negative and low risk', 'positive'];
console.log(countCovidStatus(covidStatusArray));

module.exports = countCovidStatus;
