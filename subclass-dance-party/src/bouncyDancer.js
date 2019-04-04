var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="images/carlton.gif" alt="carlton" class="team animated infinite bounce"/>');
};

makeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  // var oldStep = MakeDancer.prototype.step.bind(this);
  // oldStep();
  this.$node.toggle();
};
