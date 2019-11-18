// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return '';
  }
  // if array
  if (Array.isArray(obj)) {
    var stringArr = [];

    obj.forEach(function (element) {
      stringArr.push(stringifyJSON(element));
    });
    return '[' + stringArr.toString() + ']';
  }

  // if object
  if (typeof obj === 'object') {
    var stringObj = '';
    var objKeys = Object.keys(obj);
    objKeys.forEach(function (k) {
      if (typeof k === 'function' || typeof k === 'undefined' || typeof obj[k] === 'function' || typeof obj[k] === 'undefined') {
        return '';
      } else {
        stringObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      }
    });
    return '{' + stringObj.slice(0, stringObj.length - 1) + '}';
  }

  return obj.toString();
};
