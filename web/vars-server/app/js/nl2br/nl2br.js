exports.nl2br = function(str) {
  str = str.replace(/\r\n/g, "<br>");
  str = str.replace(/(\n|\r)/g, "<br>");
  return str;
}
exports.textarea = function(str) {
  return str.split(/\r\n|\r|\n/);
}
