var recipes = {};
var obj = {prop: 1};
function updateObjectWithKeyAndValue(object, key, value){
  object.assign({},obj,{[key]: value });
  return obj;
};
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
};
var newObj = deleteFromObjectByKey(obj, 'prop')
