// Write your solution in this file!
driver= {}

updateDriverWithKeyAndValue(driver, key, value){
    Object.assign({},driver,{[key], value})
}