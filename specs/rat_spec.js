const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function() {

  let rat1;
  let rat2;
  let food1;

  beforeEach(function() {
    rat1 = new Rat('Mike', 3);
    rat2 = new Rat('Bruno', 2);
    food1 = new Food('Lamb', 5);
  });

  it('should have a name', function() {
        assert.strictEqual(rat1.name, 'Mike');
  });

  it('should have a poison level', function() {
        assert.strictEqual(rat2.poisonLevel, 2);
  });

  it('should poison food', function() {
        assert.strictEqual(food1.poisonity, false)
        rat1.touchFood(food1);
        assert.strictEqual(food1.poisonity, true);
  });






});
