var recipes = { egg : "3 pcs", milk : "one cup"};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({key : value}, object);
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}
