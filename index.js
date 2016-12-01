function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplier) {
  return function(input) {
    return multiplier * input;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n, k) {
  return n * k;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);