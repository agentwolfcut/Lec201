const { template } = require('@babel/core')

function countCovidStatus(covidStatusArray) {
  if(!covidStatusArray) return undefined
  if(covidStatusArray.length <= 0) return {}
  
  const object = {'negative and low risk':0, 
                  'negative and high risk':0, 
                  'positive':0}

  for(const status of covidStatusArray) {
    if(status === 'negative and low risk') object['negative and low risk']++
    if(status === 'negative and high risk') object['negative and high risk']++
    if(status === 'positive') object['positive']++
  }

  if(object['negative and low risk'] <= 0) 
  delete object['negative and low risk']
  if(object['negative and high risk'] <= 0) 
  delete object['negative and high risk']
  if(object['positive'] <= 0) 
  delete object['positive']

  return object
}



module.exports = countCovidStatus
