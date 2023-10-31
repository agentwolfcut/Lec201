const { template } = require("@babel/core")

function countPosNegValue(posNegIntegerArray) {
  if(posNegIntegerArray === null || posNegIntegerArray === undefined) return undefined
  if(posNegIntegerArray.length <= 0)return {}

  const obj = {
    positive:0,
    negative:0
  }
  for(const cal of posNegIntegerArray){
    if(cal > 0){
        obj.positive++
    }
    if(cal < 0){
        obj.negative++
    }
  }
  return obj
}
console.log(countPosNegValue([]))
module.exports = countPosNegValue
