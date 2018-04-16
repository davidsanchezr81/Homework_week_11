const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');

describe('Hero', function() {

  let hero1;
  let hero2;
  let task1;
  let task2;
  let food1;
  let food2;
  let rat1;

  beforeEach(function() {
    hero1 = new Hero('Superman', 25, 'Pizza', 20);
    hero2 = new Hero('Batman', 30, 'Pasta', 15);
    task1 = new Task('Kill people', 10, 29, 12, true);
    task2 = new Task('Kill rats', 20, 10, 10, false);
    task3 = new Task('Collect information', 12, 3, 15, true);
    food1 = new Food('Pizza', 7);
    food2 = new Food('Lamb', 5);
    rat1 = new Rat('Bruno', 2);

    food3 = new Food('Perro', 5, true);
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
    const actual = hero1.heroEat(food1);
    const result = hero1.belly.length;
    assert.strictEqual(result, 1);
  });

  it('should be able to able to add tasks', function() {
    const actual = hero1.heroCanGetTasks(task1);
    const actual1 = hero1.heroCanGetTasks(task2);
    const result = hero1.tasks.length;
    assert.strictEqual(result, 2);
    assert.deepStrictEqual(hero1.tasks,[task1, task2])
  });

  it('should be able to say his/her name', function() {
    const actual = hero1.canSayName();
    assert.strictEqual(actual, `Hi, my name is Superman`);
  });

  it('should be able to increase health', function() {
    hero1.heroEat(food1);
    const actual = hero1.health;
    assert.strictEqual(actual, 35.5);
  });

  it('should decrease health by poisoning', function() {
    const actual = hero1.health;
    assert.strictEqual(actual, 25);
    rat1.touchFood(food2)
    assert.strictEqual(food2.poisonity, true);
    hero1.heroEat(food2);
    assert.strictEqual(hero1.belly.length, 0);
    const actual1 = hero1.health;
    assert.strictEqual(actual1, 20);
  });

  it('should be able to increase health by 1.5 because is favourite food', function() {
    hero1.heroEat(food1);
    const actual = hero1.health;
    assert.strictEqual(actual, 35.5);
  });

  it('can sort by reward', function () {
    hero1.heroCanGetTasks(task1);
    hero1.heroCanGetTasks(task2);
    hero1.heroCanGetTasks(task3);
    hero1.sortTaskByReward();
    assert.deepStrictEqual(hero1.tasks, [task3, task1, task2])
  });

  it('can sort by difficulty', function () {
    hero1.heroCanGetTasks(task1);
    hero1.heroCanGetTasks(task2);
    hero1.heroCanGetTasks(task3);
    hero1.sortTaskByDifficulty();
    assert.deepStrictEqual(hero1.tasks, [task2, task3, task1])
  });

  it('can sort by urgency', function () {
    hero1.heroCanGetTasks(task1);
    hero1.heroCanGetTasks(task2);
    hero1.heroCanGetTasks(task3);
    hero1.sortTaskByUrgency();
    assert.deepStrictEqual(hero1.tasks, [task1, task2, task3])
  });







});
