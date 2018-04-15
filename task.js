const Task = function(name, difficulty, urgency, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = false;

};


Task.prototype.complete = function () {
  this.completion = true;
  return `Task completed`;
};

Task.prototype.isTaskCompleted  = function () {
  if(this.completion === false){
    return `Task to be completed`;
  }else{
    return `Task is already completed`;
  }
};


module.exports = Task;
