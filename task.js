const Task = function(name, difficulty, urgency, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = true;

};

// Task.prototype.taskCompleted  = function () {
//   if(this.completion = false){
//     this.completion = true;
//     return `Task completed`
//   }else{
//     return `Task is already completed`
//   }
// };


module.exports = Task;
