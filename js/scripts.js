
var cipher = function() {
  var sentence = prompt("Enter a sentence")
  
  var firstTwo = function(string){
    var firstLetter = string.charAt(0).toUpperCase();
    var lastLetter = string.charAt(string.length -1).toUpperCase();
  
    return firstLetter + lastLetter;
  }
  
  
  var reverse = function(string){
    return string.split('').reverse().join("");
  }
  
  var getMiddle = function(){
    var middleLetter = sentence.charAt(Math.round((sentence.length / 2) -1));
    return middleLetter;
  
  }
  
  var makeNewSentence = function(newSentence) {
    var lastTwoLetters = reverse(firstTwo(newSentence));
    var firstLetter = getMiddle(newSentence);
  
    var wholeThing = firstLetter+newSentence+lastTwoLetters;
    return wholeThing.split('').reverse().join('');
  };

  return makeNewSentence(sentence);
}

console.log(cipher());