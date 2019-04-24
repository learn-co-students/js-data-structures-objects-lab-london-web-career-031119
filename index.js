// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]:  value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:  value});
};

function deleteFromDriverByKey(driver, key) {
  return delete Object.assign({}, driver)[key];
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete Object.assign(driver)[key];
};