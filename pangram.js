// create an array of letters
// create a function that accepts a string

// for each letter in a passed string
//   if letter doesn't match a string
//     push into missing-letter array
//     stringify, replace commas and log that array

var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function pangram(sentence) {
  var missingLetters = [];
  var regex = /,.<>\/?`~1234567890-=!@#$%^&*()_+[]{}|;:'"/g;

  for(var i = 0; i < abc.length; i++) {
    if(sentence.toLowerCase().replace(regex, "").search(abc[i]) === -1) {
      missingLetters.push(abc[i]);
    }
  }
  
  return missingLetters.toString("").replace(/,/g, "");
}

pangram("A quick brown fox jumps over the lazy dog");