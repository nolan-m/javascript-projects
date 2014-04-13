beforeEach(function() {
  Category.all = [];
});

describe("Purchase", function() {
  describe("initialize", function() {
    it("should initialize the purchase object with description and amount", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("pizza",10);
      testPurchase.amount.should.equal(10);
      testPurchase.description.should.equal("pizza");
    });
  });
  describe('create', function() {
    it('creates a new Purchase object', function() {
      var testPurchase = Purchase.create();
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it('initializes a new Purchase object with description and amount', function() {
      var testPurchase = Purchase.create('pizza', 10);
      testPurchase.description.should.equal('pizza');
      testPurchase.amount.should.equal(10);
    })
  });
});

describe('Category', function() {
  describe('initialize', function() {
    it('initializes a category object with name', function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("Food");
      testCategory.name.should.equal("Food");
      testCategory.purchaseArray.should.eql([]);
    });
  });
  describe('create', function(){
    it('creates a new Category object', function(){
      var testCategory = Category.create();
      Category.isPrototypeOf(testCategory).should.equal(true);
    });
    it('initializes the new object with group name', function() {
      var testCategory = Category.create("Food");
      testCategory.name.should.equal("Food");
    })
  });
  describe('createPurchase', function() {
    it('creats a Purchase object and adds it to the array for that category', function () {
      var testCategory = Category.create("Food");
      testCategory.createPurchase("apple", 5);
      testCategory.purchaseArray.length.should.equal(1);
    });
  });
  describe('totalSpent', function() {
    it('returns the total spent for that category', function() {
      var testCategory = Category.create("Food");
      testCategory.createPurchase("apple", 5);
      testCategory.totalSpent().should.equal(5);
    });
  });
  describe('totalSpentEverywhere', function() {
    it('returns the total spent for all categories', function() {
      var testCategory = Category.create("food");
      testCategory.createPurchase("apple", 5);
      var testCategory = Category.create("clothes");
      testCategory.createPurchase("jeans", 35);
      Category.totalSpentEverywhere().should.equal(40);
    });
  });
  describe('removeSpaces', function() {
    it('for 2 word names, it returns the name of a category with the spaces taken out', function() {
      var testCategory = Category.create("January Expenses");
      testCategory.removeSpaces().should.equal("JanuaryExpenses");
    });
  });
});
