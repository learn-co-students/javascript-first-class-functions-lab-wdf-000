function countdown(callback) {
  window.setTimeout(callback, 2000);
}



function multiplierValue(num1) {
  return function(num2) { 
    return num1 * num2
  }
}

function createMultiplier(num) {
  return multiplierValue(num);
}

function createMultiplierBonus(num) {
  return multiplierValue(num);
}

function multiplier(num1, num2) {
  return num1 * num2;
}

var doubler = createMultiplierBonus(2)
var tripler = createMultiplierBonus(3)
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)