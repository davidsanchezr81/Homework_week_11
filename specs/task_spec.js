const assert = require('assert');
const Task = require('../task.js');

describe('Task', function() {

  let task1;
  let task2;



  beforeEach(function() {
    task1 = new Task('Kill people', 10, 15, 12, true);
    task2 = new Task('Kill rats', 8, 1200, false);
  });

  it('should have a name', function() {
    const actual = task1.name;
    assert.strictEqual(actual, 'Kill people');
  });

  it('should have a replenishment value', function() {
    const actual = task1.difficulty;
    assert.strictEqual(actual, 10);
  });

  it('should have an urgency value', function() {
    const actual = task1.urgency;
    assert.strictEqual(actual, 15);
  });

  it('should have a reward value', function() {
    const actual = task1.reward;
    assert.strictEqual(actual, 12);
  });

  it('should be completed', function() {
    const actual1 = task2.isTaskCompleted();
    assert.strictEqual(actual1, `Task to be completed`);
    const actual2 = task2.complete();
    assert.strictEqual(actual2, `Task completed`);
    const actual3 = task2.isTaskCompleted();
    assert.strictEqual(actual3, `Task is already completed`);
  });

});
