describe ('factorial', function() {
  it('returns 1 when 0 encountered', function() {
    factorial(0).should.equal(1);
  });

  it('returns the sum of a number multiplied by every number below it', function() {
    factorial(5).should.equal(120);
  });

  it('returns the sum of a number multiplied by every number below it', function() {
    factorial(10).should.equal(3628800);
  });

  it('returns false if the number entered is a negative integer', function() {
    factorial(-3).should.equal(false);
  });

  it('returns false if the number entered is a fraction (decimal)', function() {
    factorial(1.5).should.equal(false);
  });

  it('returns false if the number entered is not a number', function() {
    factorial("word").should.equal(false);
  });

});

