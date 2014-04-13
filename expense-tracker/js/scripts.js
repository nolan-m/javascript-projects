var Purchase = {
  initialize: function(description, amount) {
    this.description = description;
    this.amount = amount;
  },
  create: function(description, amount) {
    var purchase = Object.create(Purchase);
    purchase.initialize(description, amount)
    return purchase;
  },
}

var Category = {
  all: [],
  createPurchase: function(description, amount) {
  var purchase = Purchase.create(description, amount);
  this.purchaseArray.push(purchase);
  },
  initialize: function(name) {
    this.name = name;
    this.purchaseArray = [];
  },
  create: function(name) {
    var category = Object.create(Category);
    category.initialize(name);
    Category.all.push(category)
    return category;
  },
  totalSpent: function() {
    var total = 0;
    this.purchaseArray.forEach(function(purchase){
      total += parseFloat(purchase.amount);
    });
    return total;
  },
  totalSpentEverywhere: function() {
    var total = 0;
    this.all.forEach(function(category) {
      total += category.totalSpent();
    });
    return total;
  },
  removeSpaces: function() {
    var withoutSpaces = "";
    withoutSpaces = this.name.replace(/\s/g, "");
    return withoutSpaces;
  }

}

$(document).ready(function() {
  var currentCategory;
  $("form#category-form").submit(function(event){
    event.preventDefault();
    var inputtedCategory = $("input#new-category").val();

    if (inputtedCategory === "") {
      alert("Please enter a category name.")
    } else {
      var newCategory = Category.create(inputtedCategory);
      $(".category-table").append("<tr><td class='categoryListItem'>" + newCategory.name + "</td><td class='total-spent " + newCategory.removeSpaces() + "'>$" + newCategory.totalSpent() + "</td><td class='" + newCategory.removeSpaces() + newCategory.removeSpaces() + "'></td></tr>");
      currentCategory = newCategory;
      
      console.log(newCategory.purchaseArray);
      $(".categoryListItem").last().click(function() {
        currentCategory = newCategory;
        $("#add-purchase").show();
        $(".category-class").text(newCategory.name);
        $(".purchase-table").text("");
          currentCategory.purchaseArray.forEach(function(purchase) {
          $(".purchase-table").append('<tr><td>' + purchase.description + '</td><td>$' + purchase.amount +'</td></tr>');
        });
      });
    }

  this.reset();
  });

  $("form#expense-form").submit(function(event) {
    event.preventDefault();
    console.log(currentCategory);

    var inputtedDescription = $("input#new-description").val();
    var inputtedAmount = parseFloat($("input#new-amount").val()).toFixed(2);
    if (inputtedDescription === "") {
      alert('Please enter a description.')
    } else if (inputtedAmount === undefined || isNaN(inputtedAmount) || inputtedAmount.length === 0) {
      alert('Please enter a valid amount.')
    } else {
      var newPurchase = Purchase.create(inputtedDescription, inputtedAmount);
      currentCategory.purchaseArray.push(newPurchase);

      console.log(currentCategory.purchaseArray);

      $(".purchase-table").text("");
      currentCategory.purchaseArray.forEach(function(purchase) {
        $(".purchase-table").append('<tr><td>' + purchase.description + '</td><td>$' + purchase.amount +'</td></tr>');
      });

      Category.all.forEach(function(category) {
        $("." + category.removeSpaces()).text("$" + category.totalSpent());
        $("." + category.removeSpaces() + category.removeSpaces()).text((category.totalSpent() / category.totalSpentEverywhere() * 100).toFixed(0) + "%");
      });

      $(".full-total").text("");
      $(".full-total").append("<tr><td><strong>Total spent: </strong></td><td>$" + currentCategory.totalSpentEverywhere() + "</td><td></td></tr>");
      $("#purchases").show();

    }
   
    this.reset();
    $('input#new-description').focus();

    });

});
