// Write your solution in this file!
let driver= {}

function updateDriverWithKeyAndValue(driver, key, value){
   let n = Object.assign({},driver,{ [key]: value})
    return n
   
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let n = Object.assign(driver,{[key]: value})
    return n
}

function deleteFromDriverByKey(driver, key){
    let n = {...driver}
    delete n[key]
    return n
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}