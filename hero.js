const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.belly = [];
  this.tasks = [];
};


Hero.prototype.heroCanEat = function (food) { this.belly.push(food) };

Hero.prototype.heroCanGetTasks = function (task) { this.tasks.push(task) };

Hero.prototype.canSayName = function () { return `Hi, my name is ${this.name}`};



module.exports = Hero;
