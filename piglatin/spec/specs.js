describe('pigLatin', function() {
  it("returns 'ay' at the end of a word that starts with a vowel", function() {
    pigLatin("Apple").should.equal("appleay");
  });

  it("returns the consequetive consonants up to a vowel + 'ay' at the end of a word that starts with a consonant", function() {
    pigLatin("Banana").should.equal("ananabay");
  });

  it("returns multiple words in pig latin", function() {
    pigLatin("Apple Banana queen quran").should.equal("appleay ananabay eenquay anquray");
  });

  it("for words that start with 'squ', places 'spu' at end + 'ay'", function() {
    pigLatin("squeak").should.equal("eaksquay");
  });
  
  it("for words that start with 'squ', places 'spu' at end + 'ay'", function() {
    pigLatin("squeak").should.equal("eaksquay");
  });
}); 

describe('pigLatinConsonant', function() {
  it("returns the first consecutive consonants + 'ay' at the end of words that start with consonants", function() {
    pigLatinConsonant("script").should.eql("iptscray");
  });
});

describe ('pigLatinQ', function () {
  it("returns a q word with + 'ay' at the end of ", function () {
    pigLatinQ("eenqu ranqu").should.equal("eenqu ranquay");
  })
 })
 

