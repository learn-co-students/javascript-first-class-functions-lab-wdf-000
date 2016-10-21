function countdown(callback) {
  window.setTimeout(callback, 2001);
}

function createMultiplier(callback) {
  return function (val) {
    return callback * val;
  }  
}

function multiplier(n1, n2) {
  return n1 * n2
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

function doubler(n) {
  return doublerWithBind(n);
}

function tripler(n) {
  return triplerWithBind(n);
}


