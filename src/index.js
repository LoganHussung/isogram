function isIsogram(str){
  var word = {};
  if (typeof str === 'undefined') {
    return true;
  }
  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i].toLowerCase();
    if (word[currentLetter]) {
      return false
    } else {
      word[currentLetter] = currentLetter
    }
  }
  return true;
}

console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );
