// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var node = document.body;
  var result = [];
  var recurseNodes = function (node) {
  	if(node.classList.contains(className)) {
  		result.push(node);
  	}
  	if(node.childElementCount) {
  		for (var i = 0; i < node.childElementCount; i++) {
  			recurseNodes(node.children[i]);
  		}
  	}
  };
  recurseNodes(node);
  return result;
};
