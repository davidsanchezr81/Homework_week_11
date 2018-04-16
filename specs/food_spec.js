const assert = require('assert');
const Food = require('../food.js');
const Rat = require('../rat.js');

describe('Food', function() {

  let food1;
  let food2;
  let rat1;

  beforeEach(function() {
    food1 = new Food('Pizza', 7);
    food2 = new Food('Lamb', 5);
    rat1 = new Rat('Bruno', 2);
  });

  it('should have a name', function() {
    const actual = food1.name;
    assert.strictEqual(actual, 'Pizza');
  });

  it('should have a replenishment value', function() {
    const actual = food1.replenishmentValue;
    assert.strictEqual(actual, 7);
  });

  it('should be able to check food poisonity', function() {
    const actual = food1.poisonity;
    assert.strictEqual(actual, false);
    rat1.touchFood(food1);
    assert.strictEqual(food1.poisonity, true)
  });



});
