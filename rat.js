const Rat = function(name, poisonLevel) {
  this.name = name;
  this.poisonLevel = poisonLevel;

};

Rat.prototype.touchFood = function (food) {
  food.getPoisoned(food);
};



module.exports = Rat;
