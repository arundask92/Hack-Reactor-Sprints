var makeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="images/breaker.gif" alt="breaker" class="breaker animated infinite rotateIn team"/>');
};

makeBreakDancer.prototype = Object.create(MakeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function () {
  // var oldStep = MakeDancer.prototype.step.bind(this);
  // oldStep();
  this.$node.toggle();
};