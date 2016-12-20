function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return (anothernum) => anothernum * multiplierValue;
}


function multiplier(num1, num2) {
  return num1 * num2;
}

// let doubler = createMultiplier(2);
function doubler(num) {
  return createMultiplier(2)(num);
}

// let tripler = createMultiplier(3);
function tripler(num) {
  return createMultiplier(3)(num);
}

// let doublerWithBind = multiplier.bind(null, 2);
function doublerWithBind(num) {
  return multiplier.bind(null, 2);
}

// let triplerWithBind = multiplier.bind(null, 3);
function triplerWithBind(num) {
  return multiplier.bind(null, 3);
}
