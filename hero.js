const Hero = function(name, health, favouriteFood, wallet) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.belly = [];
  this.tasks = [];
  this.wallet = wallet;
};


Hero.prototype.heroEat = function (food) {
  if(food.poisonity){
    this.health += 5;
  }else{
    this.belly.push(food);
    this.increaseHealth(food);
  }
};

Hero.prototype.heroCanGetTasks = function (task) {
  this.tasks.push(task)
};

Hero.prototype.canSayName = function () {
  return `Hi, my name is ${this.name}`
};

Hero.prototype.increaseHealth = function (food) {
  if(food.name === this.favouriteFood){
    this.health = this.health + (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
};


Hero.prototype.sortTaskByReward = function (property) {
  this.tasks.sort(function (task1, task2){
    if (task1.reward > task2.reward) {
      return -1;
    }
    if (task1.reward < task2.reward) {
      return 1;
    }
    return 0;
  });
};

Hero.prototype.sortTaskByDifficulty = function (property) {
  this.tasks.sort(function (task1, task2){
    if (task1.difficulty > task2.difficulty) {
      return -1;
    }
    if (task1.difficulty < task2.difficulty) {
      return 1;
    }
    return 0;
  });
};

Hero.prototype.sortTaskByUrgency = function (property) {
  this.tasks.sort(function (task1, task2){
    if (task1.urgency > task2.urgency) {
      return -1;
    }
    if (task1.urgency < task2.urgency) {
      return 1;
    }
    return 0;
  });
};



module.exports = Hero;
