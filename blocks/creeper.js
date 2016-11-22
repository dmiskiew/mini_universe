var CreeperBlock = function(){
  this.type = 'creeper';
  this.transparent = false;
};

CreeperBlock.prototype.spreedCreeper = function(){
		var i = CREEPER_GROWING_ATTEMPTS;

		while(i > 0){
			var y = this.y;
			
			var x = this.x + randomIn([-1, 0, 0, 1]);
			if(x == this.x){
			  y = y + randomIn([-1, 1]);
			}

			var checkedBlock = mapController.getBlock(x, y);

			if(!checkedBlock.creeperProof){
				checkedBlock.type = 'creeper';
				mapController.getPiece(x, y).setBlock(new CreeperBlock());
				return;
			}

			i--;
		}
	};

CreeperBlock.prototype.active = function(){
	this.spreedCreeper();
};
