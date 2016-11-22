var TulipBlock = function(){
  this.type = 'tulip';
  this.transparent = true;
};

TulipBlock.prototype.checkDownForGrass = function(){
	var downBlock = mapController.getBlock(this.x, this.y - 1);
	if(downBlock.type != 'grass'){
	  mapController.getPiece(this.x, this.y).setBlock(new AirBlock());
		return false;
	}
	return true;
};

TulipBlock.prototype.checkForGrowingFlower = function(){
	var i = FLOWER_GROWING_ATTEMPTS;

	while(i > 0){
		var x = this.x + random(-4, 4);
		var y = this.y + random(-4, 4);

		var checkedBlock = mapController.getBlock(x, y);
		var upCheckedBlock = mapController.getBlock(x, y + 1);

		if(checkedBlock.type == 'grass' && upCheckedBlock.type == 'air'){
			mapController.getPiece(x, y + 1).setBlock(new TulipBlock());
			return;
		}

		i--;
	}
};

TulipBlock.prototype.active = function(){
	if(this.checkDownForGrass()){
	  this.checkForGrowingFlower();
	}
};


