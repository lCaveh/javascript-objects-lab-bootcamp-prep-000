var recipes = { egg : "3 pcs", milk : "one cup"};
function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign{ object, {key : value}}
}
