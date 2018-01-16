var recipes = {};
var obj = {prop: 1};
function updateObjectWithKeyAndValue(object, key, value){
  object.assign({},obj,{[key]: value });
  return obj;
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
function destructivelyDeleteFromObjectByKey(){
  delete object.key;
  return object;
}
