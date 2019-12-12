// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newObject = Object.assign({}, driver, { [key]: value });
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driverObject, key) {
  let newObject = Object.assign({}, driverObject);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
  delete driverObject[key];
  return driverObject;
}
