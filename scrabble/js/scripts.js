var scrabbleScore = function(string) {
  var dictionary = {"a": 1, "e" : 1, "i" : 1, "o" : 1, "u":1, "l": 1, "n": 1, 
                    "r": 1, "s": 1, "t":1, "d": 2, "g": 2, "b" : 3, "c": 3,
                    "m": 3, "p": 3, "f": 4, "h":4, "v": 4, "w": 4, "y": 4, "k": 5,
                    "j": 8, "x": 8, "q": 10, "z": 10};

  var inputArray = string.toLowerCase().split("");
  var totalScore = 0;

   for(var i=0; i <= inputArray.length; i++) {
      for (var x in dictionary) {
        if (inputArray[i] === x) {
           totalScore = totalScore + dictionary[x];
        }
      }; 
    };    
  return totalScore;
};


$(document).ready(function(){
  $("form#score-form").submit(function(){
    var input = $("#word").val();
    var totalScore = scrabbleScore(input);

    $(".scrabbleScore").text(totalScore);
      this.reset();

    $(".yourWord").text(input);
    $("div#result").show();

    event.preventDefault();
  });
});

