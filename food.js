const Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonity = false;
};

Food.prototype.getPoisoned = function (food) {
  food.poisonity = true;
};

module.exports = Food;
