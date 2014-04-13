describe('ShipCalc', function() {
  describe('dimSize', function() {
    it('will return the combined dimensions', function() {
      var myPackage = Object.create(ShipCalc);
      myPackage.pLength = 20;
      myPackage.pWidth = 20;
      myPackage.pHeight = 10;
      myPackage.dimSize().should.equal(50)
    })
  })

  describe('dimCalc', function() {
    it('will return the dimension rate', function() {
      var myPackage = Object.create(ShipCalc);
      myPackage.dimSize = 50;
      myPackage.dimCalc().should.equal('5,5,5');
    })
    it('will return the dimension rate', function() {
      var myPackage = Object.create(ShipCalc);
      myPackage.dimSize = 105;
      myPackage.dimCalc().should.equal('20,20,20');
    })  
  })

  describe('rateCalc', function() {
    it('will return the cost based on shipping service', function() {
      var myPackage = Object.create(ShipCalc);
      myPackage.dimSize = 50;
      myPackage.dimCalc();
      myPackage.rateCalc().should.equal('10,15,25')
    })
  })
  
  describe('weightCalc', function() {
    it('will return the cost based on weight', function() {
      var myPackage = Object.create(ShipCalc);
      myPackage.weight = 10;
      myPackage.dimSize = 50;
      myPackage.dimCalc();
      myPackage.rateCalc();
      myPackage.weightCalc().should.equal('15,20,30')
    })
  })
  
});
