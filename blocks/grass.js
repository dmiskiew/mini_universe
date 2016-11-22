var GrassBlock = function(){
  this.type = 'grass';
  this.transparent = false;
};

GrassBlock.prototype.checkForFlower = function(){
	var upBlock = mapController.getBlock(this.x, this.y + 1);
	if(upBlock.transparent){
		if(getChance(FLOWER_ON_GRASS_CHANCE)){
			mapController.getPiece(this.x, this.y).setBlock(new TulipBlock());
		}
	}
};

GrassBlock.prototype.checkForDryingGrass = function(){
	var upBlock = mapController.getBlock(this.x, this.y + 1);
	if(!upBlock.transparent){
		mapController.getPiece(this.x, this.y).setBlock(new DirtBlock());
		return true;
	}
	return false;
}

GrassBlock.prototype.checkForGrowingGrass = function(){
	var i = GRASS_GROWING_ATTEMPTS;

	while(i > 0){
		var x = this.x + random(-2, 2);
		var y = this.y + random(-2, 2);

		var checkedBlock = mapController.getBlock(x, y);
		var upCheckedBlock = mapController.getBlock(x, y + 1);

		if(checkedBlock.type == 'dirt' && upCheckedBlock.transparent){
			mapController.getPiece(x, y).setBlock(new GrassBlock());
			return;
		}


		i--;
	}
};

GrassBlock.prototype.active = function(){
  if(!this.checkForDryingGrass()){
    this.checkForGrowingGrass();
  }
};
