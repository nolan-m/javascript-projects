describe('scrabbleScore', function() {
  it('scores the word that you enter via scrabble rules for 1 point letters', function() {
    scrabbleScore("bba").should.equal(7);
  });

  it('scores the word that you enter via scrable rules for 2 point letters', function() {
    scrabbleScore("dg").should.equal(4);
  }); 
  it('scores the word that you enter via scrable rules for 3 point letters', function() {
    scrabbleScore("bcmp").should.equal(12);
  });
  it('scores the word that you enter via scrable rules for 4 point letters', function() {
    scrabbleScore("fhvwy").should.equal(20);
  });it('scores the word that you enter via scrable rules for 5 point letters', function() {
    scrabbleScore("K").should.equal(5);
  });it('scores the word that you enter via scrable rules for 8 point letters', function() {
    scrabbleScore("jx").should.equal(16);
  });it('scores the word that you enter via scrable rules for 10 point letters', function() {
    scrabbleScore("qz").should.equal(20);
  });
  it('scores the word that you enter via scrable rules for 10 point letters', function() {
    scrabbleScore("apple").should.equal(9);
  });
});

