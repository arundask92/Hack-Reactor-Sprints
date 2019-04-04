var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="images/g02.gif" alt="carlton" class="team"/>');
};

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};



