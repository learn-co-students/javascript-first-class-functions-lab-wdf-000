function countdown(callback) {
  window.setTimeout(callback, 500);
}

function createMultiplier(multiplierValue) {
  return function(x) {
    return x * multiplierValue
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(value, multiplier) {return value * multiplier }

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
