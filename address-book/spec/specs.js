beforeEach(function() {
  Contact.all = [];
});

describe('Contact', function() {
  describe('fullName', function() {
      it('will ouput the first and last name with a space in between', function() {
        var testContact = Object.create(Contact);
        testContact.firstName = 'Steve';
        testContact.lastName = 'Irwin'
        testContact.fullName().should.equal('Steve Irwin');
      });
  });
  describe('initialize', function() {
    it('will set the first and last name of the object', function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
    it('sets up an empty array for the address property', function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
  });
  describe('create', function() {
    it('creates a new instance of the object', function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it('initializes the contact', function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    })
  });
  describe('createAddress', function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
  describe('createPhone', function() {
    it("creates an phone object", function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhone();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
    it('adds phone numbers to the phone number array inside the Contact object', function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhone();
      testContact.phoneNumbers.should.eql([testPhone]);
    });
  });
});

describe('Address', function() {
  describe('initialize', function() {
    it('sets the street, city, and state for the address', function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("Main", "Portland", "Oregon");
      testAddress.street.should.equal("Main");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("Oregon");
    });
  });
  describe('create', function() {
    it('creates a new instace of the object', function() {
      var testAddress = Address.create(Address);
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it('initializes the address', function() {
      var testAddress = Address.create("123 Main", "Portland", "Oregon");
      testAddress.city.should.equal("Portland");
    })
  });
  describe('validCity', function() {
    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portl4nd";
      testAddress.state = "Oregon";
      testAddress.validCity().should.equal(false);
    })

    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portland";
      testAddress.state = "0regon";
      testAddress.validState().should.equal(false);
    });

    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.validCity().should.equal(true);
    });
  });
  describe('fullAddress', function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });

});

describe('Phone', function() {
  describe('create', function() {
    it("creates an instance of the phone object", function() {
      var testPhone = Phone.create(Phone);
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
    it('initializes the phone number', function() {
      var testPhone = Phone.create("1234567890");
      testPhone.number.should.equal("1234567890");
    })
  });
  describe('initialize', function() {
    it('will set the number property automatically', function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("1234567890");
      testPhone.number.should.equal("1234567890");
    });
  });
  describe('fullPhone', function() {
    it("returns a properly formatted phone number", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "7149430502";
      testPhone.fullPhone().should.equal("(714) 943-0502")
    })
  })

  describe('validPhone', function() {
    it("returns false if inputted phone number does not have 10 numbers", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "7149430508422";
      testPhone.validPhone().should.equal(false)
    })

    it("returns true if inputted phone number does not have 10 numbers", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "1234567891";
      testPhone.validPhone().should.equal(true)
    })
  })
});
