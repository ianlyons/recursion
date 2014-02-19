// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
//

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(typeof obj === "number") {
    return obj.toString();
  } else if (obj === null) {
    return "null";
  } else if (obj === true) {
    return "true";
  } else if (obj === false) {
    return "false";
  } else if (typeof obj === "string") {
    if(obj.charAt(0) == '[') {
      obj = obj.replace(/\\/g, "\\\\");
      return "\"" + obj.replace(/"/g, "\\\"") + "\"";
    } else {
      return "\"" + obj + "\"";
    } 
  } else if (typeof obj === "object") {
    if(obj instanceof Array) {
      if(obj.length === 0) {
        return '[]';
      } else {
        var result = [];
        for(var i = 0; i < obj.length; i++) {
          result.push(stringifyJSON(obj[i]));
        }
        return '[' + result + ']';
      }
    } else {
      if(Object.keys(obj).length === 0) {
        return '{}';
      } else {
        var result = "";
        for(var prop in obj) {
          result += stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]) + ",";
          console.log(result);
        }
        return'{' + result.substring(0,result.length-1) + '}';
      }
    }
  }
};
