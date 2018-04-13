const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.belly = [];
  this.tasks = [];
};


Hero.prototype.heroEat = function (food) {
  this.belly.push(food);
  this.increaseHealth(food);
};

Hero.prototype.heroCanGetTasks = function (task) { this.tasks.push(task) };

Hero.prototype.canSayName = function () { return `Hi, my name is ${this.name}`};

Hero.prototype.increaseHealth = function (food) {
  if(food.name === this.favouriteFood){
    this.health = this.health + (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
};




module.exports = Hero;
