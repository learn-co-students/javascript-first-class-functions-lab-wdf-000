function countdown(callback){
	window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
	return function(value){
		return value * multiplierValue;
	};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n1, n2){
	return n1 * n2;
}


function doublerWithBind(n){
	return multiplier.bind(null, 2);
}

function triplerWithBind(n){
	return multiplier.bind(null, 3);
}