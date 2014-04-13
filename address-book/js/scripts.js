var rgx = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;

var rgxchk = function(elem, rgx) {
    if (rgx.test(elem)) {
        return true;
    } else {
        return false;
    }   
}

var Contact = {
  all: [],
  createPhone: function(number) {
    var phone = Phone.create(number);
    this.phoneNumbers.push(phone);
    return phone;
  },
  createAddress: function(street, city, state) {
    var address = Address.create(street, city, state);
    this.addresses.push(address);
    return address;
  },
  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
    this.phoneNumbers = [];
  },
  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  initialize: function(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;  
  },
  create: function(street, city, state) {
    var address = Object.create(Address);
    address.initialize(street, city, state);
    return address;
  },

  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },
  validCity: function() {
    return (rgxchk(this.city, rgx));
  },
  validState: function() {
     return (rgxchk(this.state, rgx));
  }

};

var Phone = {
  create: function(number){
    var phone = Object.create(Phone);
    phone.initialize(number);
    return phone;
  },
  initialize: function(number) {
    this.number = number;
  },
  fullPhone: function() {
    var cleanNumber = this.number.replace(/[A-Za-z$-.()]/g, "");
    var numArray = cleanNumber.toString().split('');
    return '(' + numArray.slice(0, 3).join('') + ') ' + numArray.slice(3, 6).join('') + '-' + numArray.slice(6, 11).join(''); 
  },
  validPhone: function() {
     return (this.number.replace(/[A-Za-z$-.()]/g, "").length === 10)
  }
};  

$(document).ready(function() {
  var newAddressDiv = '<div class="new-address">' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-street">Street</label>' + 
                                   '<input type="text" class="form-control new-street">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-city">City</label>' + 
                                   '<input type="text" class="form-control new-city">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-state">State</label>' + 
                                   '<input type="text" class="form-control new-state">' + 
                                 '</div>' + 
                               '</div>';

  var newPhoneDiv = '<div class="form-group">' + 
                      '<label for="new-phone">Phone Number:</label>' + 
                        '<input type="text" class="form-control new-phone">' + 
                    '</div>';

  

  $("#new-addresses").append(newAddressDiv);
  $("#new-phones").append(newPhoneDiv);

  $("#add-address").click(function() {
    $("#new-addresses").append(newAddressDiv);
  });

  $("#add-phone").click(function() {
    $("#new-phones").append(newPhoneDiv);
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();  


    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();
    
    var newContact = Contact.create(inputtedFirstName, inputtedLastName);

    var formElements = 0;
    var validFormElements = 0;

    $(".new-address").each(function() {

      formElements += 1;

      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      newContact.createAddress(inputtedStreet, inputtedCity, inputtedState);

/*      if(!newContact.createAddress().validCity()) {
        alert('Bad city');
      } else if (!newContact.createAddress().validState()) {
        alert('Bad state');
      } else {
        newContact.addresses.push(newContact.createAddress());
      }  */
      validFormElements += 1;
    
    });

    $("#new-phones input.new-phone").each(function() {
      formElements += 1;

      var inputtedPhone = $(this).val();
      newContact.createPhone(inputtedPhone);

/*      if (!newPhone.validPhone()) {
        alert('Invalid Phone Number');
      } else {
        newContact.phoneNums.push(newPhone);
      }*/

      validFormElements += 1;
    });

    if (validFormElements === formElements) {
      $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>')
    }


    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

      $("ul#phones").text("");
      newContact.phoneNumbers.forEach(function(phone) {
        $("ul#phones").append("<li>" + phone.fullPhone() + "</li>");
      });

    });

    this.reset();

  });

});
