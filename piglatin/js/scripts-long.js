var pigLatin = function(wordList) {
  var listArrays = wordList.toLowerCase().split(' ');
  var vowels =["a", "e", "i", "o", "u"];
  var pigLatinArray = [];
  var consonantsArray = [];

    listArrays.forEach(function(listArray) {
       var firstLetter = listArray.charAt(0);
        if (vowels.indexOf(firstLetter) >= 0) {
          pigLatinArray.push(listArray + "ay");
        } else {
          var listArrayLetters = listArray.split('');

          for (var i = 0; i <= listArrayLetters.length; i+=1) {
            var currentLetter = listArrayLetters[i];

            if (vowels.indexOf(currentLetter) >= 0) {
              break;
            } else {
              consonantsArray.push(currentLetter);
          };

          var consonants = consonantsArray.join("");
          var splicePoint = consonants.length;
          var pigLatinConsonant = listArray.slice(splicePoint)  + consonants + "ay";
          
        };
        pigLatinArray.push(pigLatinConsonant);
      };
  });    
  return pigLatinArray.join(" ");
};



/*
var 

        return n;

        
*/



/*
  var wordToMatch = word.toLowerCase().split('').sort().join('');
  var wordList = matchList.toLowerCase().split('\n');
  var wordListSorted = [];

  for(var x=0; x < wordList.length; x++) {
    wordListSorted.push(wordList[x].split('').sort().join(''));
  }

  for(var x=0; x < wordListSorted.length; x++) {
    if(wordToMatch === wordListSorted[x]) {
      $('#result').append("<li class='match'>" + wordList[x] + "</li>");
    } else {
      partialFinder(wordToMatch, wordList[x]);
    }
  }
}

$(document).ready(function() {
  $('#anagram-form').submit(function(event) {
    $('#result').empty();

    var matchWord = $('#matchword').val();
    var testWordList = $('#wordlist').val();

    anagramList(matchWord, testWordList);

    event.preventDefault();
  });

*/

