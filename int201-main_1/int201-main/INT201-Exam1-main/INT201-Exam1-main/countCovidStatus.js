const { template } = require("@babel/core")

function countCovidStatus(covidStatusArray) {
  if(covidStatusArray === null || covidStatusArray === undefined) return undefined
  if(covidStatusArray.length <= 0) return {}

  const obj = {
    'negative and low risk': 0,
    'negative and high risk': 0,
    'positive': 0
  }
  for(const status of covidStatusArray){
    if(status === 'negative and low risk'){
      obj["negative and low risk"]++
    }
    if(status === 'negative and high risk'){
      obj['negative and high risk']++
    }
    if(status === 'positive'){
      obj['positive']++
    }
  }
  if(obj["negative and low risk"] <= 0){
    delete obj["negative and low risk"]
  }
  if(obj["negative and high risk"] <= 0){
    delete obj["negative and high risk"]
  }
  if(obj["positive"] <= 0){
    delete obj.positive
  }
  return obj
}

module.exports = countCovidStatus
