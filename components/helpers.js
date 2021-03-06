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

function loadTexture(path){
  var img = new Image();
  img.src = path;
  return img;
}

function setTexture($element, name){
  var url = "url(" + TEXTURES_PATH + name + ".png),";
  url += "url(" + TEXTURES_PATH + "air.png)";
  $element.css('background', url);
}
