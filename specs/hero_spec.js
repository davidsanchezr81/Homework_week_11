const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function() {

  let hero1;
  let hero2;
  let task1;
  let task2;
  let food1;
  let food2;


  beforeEach(function() {
    hero1 = new Hero('Superman', 25, 'Pizza');
    hero2 = new Hero('Batman', 30, 'Pasta');
    task1 = new Task(10, 15, 12);
    task2 = new Task(8, 1200);
    food1 = new Food('Pizza', 7);
    food2 = new Food('Lamb', 5);

  });

  it('should have a name', function() {
    const actual = hero1.name;
    assert.strictEqual(actual, 'Superman');
  });

  it('should have health', function() {
    const actual = hero1.health;
    assert.strictEqual(actual, 25);
  });

  it('should have health', function() {
    const actual = hero1.favouriteFood;
    assert.strictEqual(actual, "Pizza");
  });

  it('should be able to eat food', function() {
    const actual = hero1.heroCanEat(food1);
    const result = hero1.belly.length;
    assert.strictEqual(result, 1);
  });

  it('should be able to able to add tasks', function() {
    const actual = hero1.heroCanGetTasks(task1);
    const actual1 = hero1.heroCanGetTasks(task2);
    const result = hero1.tasks.length;
    assert.strictEqual(result, 2);
  });

  it('should be able to say his/her name', function() {
    const actual = hero1.canSayName();
    assert.strictEqual(actual, `Hi, my name is Superman`);
  });





});
