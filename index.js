const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
  const newObj = {}
  delete Object.assign(newObj, driver)[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}

console.log(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway'))