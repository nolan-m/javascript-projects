var vowels =["a", "e", "i", "o", "u"];

var pigLatin = function(wordList) {
  var pigLatinArray = [];
  var inputWords = wordList.toLowerCase().split(' ');

    inputWords.forEach(function(inputWord) {
       var firstLetter = inputWord.charAt(0);
       var secondLetter = inputWord.charAt(1);
        if (vowels.indexOf(firstLetter) >= 0) {
          pigLatinArray.push(inputWord + "ay");
        } else if (firstLetter === "q" && secondLetter ==="u") {
          var qWord = inputWord.slice(2) + "qu";
          pigLatinArray.push(pigLatinQ(qWord));
        } else if (firstLetter === "s" && secondLetter === "q") {
          var qWord = inputWord.slice(3) + "squ";
          pigLatinArray.push(pigLatinQ(qWord));
        } else {
          pigLatinArray.push(pigLatinConsonant(inputWord));
        };
      });
    return pigLatinArray.join(" ");
};

var pigLatinQ = function(qWord) {
  var firstLetter = qWord.charAt(0);
  if (vowels.indexOf(firstLetter) >= 0) {
    var qWordFinal = (qWord + "ay");
  } else {
    var qWordFinal = pigLatinConsonant(qWord)
  };
  return qWordFinal;

};

var pigLatinConsonant = function (consonantList) {
  var inputWordLetters = consonantList.split('');
  var consonantsArray = [];

  for (var i = 0; i <= inputWordLetters.length; i+=1) {
    var currentLetter = inputWordLetters[i];

    if (vowels.indexOf(currentLetter) >= 0) {
      break;
    } else {
      consonantsArray.push(currentLetter);
  };
  var consonants = consonantsArray.join("");
  var splicePoint = consonants.length;
  var pigLatinConsonant = consonantList.slice(splicePoint)  + consonants + "ay";
};
return pigLatinConsonant;
};
  

$(document).ready(function() {
  $("form#piglatin-form").submit(function(event) {

    var pigLatinInput = $("#phrase").val();

    var result = pigLatin(pigLatinInput);
    console.log(result);

    $(".results").text(result);
    $("#resultsDiv").show();

    event.preventDefault();
  })
})

