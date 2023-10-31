const { template } = require('@babel/core')

function countPosNegValue(posNegIntegerArray){
    if(posNegIntegerArray === null || posNegIntegerArray === undefined)
    return undefined
    
    if(posNegIntegerArray.length <= 0)
    return {}

    const object = {positive : 0 , negative : 0}

    for(const number of posNegIntegerArray){
        if(number < 0)
        object.negative++
        if(number > 0)
        object.positive++
    }

    return object
        
}
module.exports = countPosNegValue
