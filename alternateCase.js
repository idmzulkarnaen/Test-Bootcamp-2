var text = '"Hello World"';
var alternateCase = function (letters) {
  var newLetters = '';
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      newLetters += letters[i].toUpperCase();
    } else {
      newLetters += letters[i].toLowerCase();
    }
  }
  return newLetters;
};

console.log(alternateCase(text));