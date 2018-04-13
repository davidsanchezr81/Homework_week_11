const assert = require('assert');
const Food = require('../food.js');


describe('Food', function() {

  let food1;
  let food2;

  beforeEach(function() {
    food1 = new Food('Pizza', 7);
    food2 = new Food('Lamb', 5);
  });

  it('should have a name', function() {
    const actual = food1.name;
    assert.strictEqual(actual, 'Pizza');
  });

  it('should have a replenishment value', function() {
    const actual = food1.replenishmentValue;
    assert.strictEqual(actual, 7);
  });



});
