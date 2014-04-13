var ShipCalc = {
  runningTotal : {'StandardTotal':0, 'ExpressTotal':0, 'OvernightTotal':0},
  serviceRates : {'Standard':5, 'Express':10, 'Overnight':20},
  dimensionRates : {'oneToFifty':5, 'fiftyOneToHundred':10, 'hundredPlus': 20},
  weightRate : 0.5,
  dimSize : function() {
    return this.pLength + this.pWidth + this.pHeight;
  },
  dimCalc : function() {
    if(this.dimSize() <= 50) {
      this.runningTotal.StandardTotal += this.dimensionRates.oneToFifty;
      this.runningTotal.ExpressTotal += this.dimensionRates.oneToFifty;
      this.runningTotal.OvernightTotal += this.dimensionRates.oneToFifty;
    } else if (this.dimSize() <= 100) {
      this.runningTotal.StandardTotal = this.dimensionRates.fiftyOneToHundred;
      this.runningTotal.ExpressTotal = this.dimensionRates.fiftyOneToHundred;
      this.runningTotal.OvernightTotal = this.dimensionRates.fiftyOneToHundred;
    } else {
      this.runningTotal.StandardTotal = this.dimensionRates.hundredPlus;
      this.runningTotal.ExpressTotal = this.dimensionRates.hundredPlus;
      this.runningTotal.OvernightTotal = this.dimensionRates.hundredPlus;
    }
    return this.runningTotal.StandardTotal + ',' + this.runningTotal.ExpressTotal + ',' + this.runningTotal.OvernightTotal;
  },
  rateCalc : function() {
    this.runningTotal.StandardTotal += this.serviceRates.Standard;
    this.runningTotal.ExpressTotal += this.serviceRates.Express;
    this.runningTotal.OvernightTotal += this.serviceRates.Overnight;
    return this.runningTotal.StandardTotal + ',' + this.runningTotal.ExpressTotal + ',' + this.runningTotal.OvernightTotal;

  },
  weightCalc : function() {
    this.runningTotal.StandardTotal += this.weight * this.weightRate;
    this.runningTotal.ExpressTotal += this.weight * this.weightRate;
    this.runningTotal.OvernightTotal += this.weight * this.weightRate;
    return this.runningTotal.StandardTotal + ',' + this.runningTotal.ExpressTotal + ',' + this.runningTotal.OvernightTotal;
  }
}


$(document).ready(function() {

  $('form').submit(function() {
    event.preventDefault();

    var myLength = parseInt($('#package-length').val());
    var myWidth = parseInt($('#package-width').val());
    var myHeight = parseInt($('#package-height').val());
    var myWeight = parseInt($('#package-weight').val());

    var myPackage = Object.create(ShipCalc);
    myPackage.pLength = myLength;
    myPackage.pWidth = myWidth;
    myPackage.pHeight = myHeight;
    myPackage.weight = myWeight;

    myPackage.dimCalc();
    myPackage.rateCalc(); 
    var shippingRates = myPackage.weightCalc().split(',');

    $('.shipping-column span').empty();
    $('#shipping-rates').show();
    $('#dimensions').html("<p>Dimension: " + myLength + " x " + myWidth + " x " + myHeight + "  |   Weight: " + myWeight + " lbs. </p>")

    for (var x = 0; x < shippingRates.length; x++) {
      $('#shipping-col-' + (x+1) + ' span').append('$' + parseFloat(shippingRates[x]).toFixed(2));
      console.log(shippingRates[x])
    }

    this.reset();
  });

  $('#ship-button .btn').click(function() {
    $('#shipping-rates').hide();
  })


})
