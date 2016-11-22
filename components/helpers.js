String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function random(min, max){
	randomPart = Math.round((max - min) * Math.random());
	return randomPart + min;
}

function randomIn(array){
  var length = array.length - 1;
  return array[random(0, length)];
}

function getChance(chance){
	return Math.random() <= chance;
}
