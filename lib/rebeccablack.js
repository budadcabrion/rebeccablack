var RebeccaBlack = module.exports = function() {
  this.name = 'Rebecca Black';
}

RebeccaBlack.prototype.chooseSeat = function() {
  throw ('ERROR: cannot decide on seat');
}

RebeccaBlack.prototype.getDate = function() {
  var d = new Date();
  var n = d.getDay();

  return [
    'Friday was two days ago, and now the weekend is over. :(',
    'Exact opposite of Friday',
    'Three days until Friday',
    'It is the middle of the week, only two days until Friday',
    'Tomorrow is friday!!!',
    'It\'s Friday, Friday, Friday, Friday!!!',
    'Yesterday was Friday!  Now it\s the weekend!'
  ][n];
}