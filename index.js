const driver = { name : "Sam"
}

function updateDriverWithKeyAndValue (driver, key, value) {

  let newDriver = Object.assign({address : `${value}`}, driver)
  return newDriver


}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {

  driver[key] = value;
  return driver


}

function deleteFromDriverByKey(driver, key) {

  return delete Object.assign({}, driver)[key]

}

function destructivelyDeleteFromDriverByKey (driver, key) {

return delete Object.assign(driver)[key]

}
