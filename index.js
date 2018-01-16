var recipes = {};
var obj = {prop: 1};
function updateObjectWithKeyAndValue(object, key, value){
  object.assign({},object,{[key]: value });
  return object;
};
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj [key];
  return newObj
};

deleteFromObjectByKey(obj, 'prop');

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
