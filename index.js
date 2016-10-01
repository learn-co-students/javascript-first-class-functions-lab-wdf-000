function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier() {
  return ( (x) => { return x*2; } );
}


function createMultiplierBonus(vari) {
  return ( (x) => { return vari*x;; } );
}

doubler = createMultiplierBonus(2);
tripler = createMultiplierBonus(3);


function multiplier(a,b) {
  return a*b;
}

doublerWithBind = multiplier.bind(null,2);
triplerWithBind = multiplier.bind(null,3);
