class CreeperBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'creeper';
    this.type = 'creeper';
    this.status = 'normal';
    this.transparent = false;
  }

	active(){
	  this.spreedCreeper();
  }

  getDeath(){
    this.texture = 'damaged_creeper';
    this.status = 'damaged';

    mapController.renderBlock(this.x, this.y);

    setTimeout(this.giveDeath.bind(this), 50);
  }

  cure(){
    this.texture = 'creeper';
    this.status = 'normal';

    mapController.renderBlock(this.x, this.y);
  }

  giveDeath(){
    var count = this.countNearCreeper();
    if(count % 2 == 1 || count == 0){
      this.toAir();
      return true;
    }

    var nearCreepers = this.getNearCreeper();
    var which = random(0, nearCreepers.length - 1);

    nearCreepers[which].getDeath();
    this.cure();
  }

  getNearCreeper(){
    var creepers = [];
    var coords = [{x: this.x, y: this.y + 1},
                  {x: this.x + 1, y: this.y},
                  {x: this.x, y: this.y - 1},
                  {x: this.x - 1, y: this.y}]

    var i = coords.length;
    while(i--){
      let checkedBlock = mapController.getBlock(coords[i].x, coords[i].y);
      if(checkedBlock.type == 'creeper' && checkedBlock.status == 'normal'){
        creepers.push(checkedBlock)
      }
    }
    return creepers;
  }

  countNearCreeper(){
    var count = 0;
    var coords = [{x: this.x, y: this.y + 1},
                  {x: this.x + 1, y: this.y},
                  {x: this.x, y: this.y - 1},
                  {x: this.x - 1, y: this.y}]

    var i = coords.length;
    while(i--){
      let checkedBlock = mapController.getBlock(coords[i].x, coords[i].y);
      if(checkedBlock.type == 'creeper'){
        count++;
      }
    }
    return count;
  }

  destroy(){
    this.getDeath();
  }

  toAir(){
    mapController.changeBlockByTypeAndCoords(this.x, this.y, new AirBlock());
  }

  spreedCreeper(){
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
	}
};

