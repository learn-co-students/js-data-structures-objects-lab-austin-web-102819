// Write your solution in this file!
let driver = {};
const obj = {a: 1, b: 2}

 function updateDriverWithKeyAndValue(driver, key, value) {
  const newOb = Object.assign({}, driver, {[key]: value})
return newOb
} 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Object.assign( driver, {[key]: value})
return driver
}

function deleteFromDriverByKey(driver, key) {
  let clone = Object.assign({}, driver);
  delete clone[key];
  return clone
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
