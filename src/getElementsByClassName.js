// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, start, results) {
  var results = results || [];
  var start = start || document.body;

  if (start.classList.contains(className)) {
    results.push(start);
  }

  if (start.children) {
    var children = start.children;

    for (var i = 0; i < children.length; i++) {
      getElementsByClassName(className, children[i], results);

    }
  }

  return results;

};
