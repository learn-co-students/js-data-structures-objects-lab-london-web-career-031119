// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromDriverByKey(driver, key) {
 const newObj = Object.assign({}, driver);
 delete newObj[key];
 return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
return driver
}
