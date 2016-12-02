class TreeBase extends BlockBase{
  constructor(){
    super(...arguments);
    this.tree = true;
  }

  active(){
    this.energyProcess();
    this.energyTransfer();

    this.overloadProcess();
    this.overloadTransfer();
  }

  	
  overloadProcess(){
    this.overload += this.overloadCreation;

    if(this.overload >= this.overloadReduction){
      this.overload -= this.overloadReduction;
    }

    if(this.overload > TREE_OVERLOAD_MAX){
      this.destroy();
      return false;
    }
  }

  overloadTransfer(){
    var downBlock = this.getDownBlock();

    if(this.overload < TREE_OVERLOAD_MAX_TRANSFER){
      return false;
    }

    if(downBlock.tree && downBlock.overload < TREE_OVERLOAD_LOCK_VALUE){
      downBlock.changeOverload(TREE_OVERLOAD_MAX_TRANSFER);
      this.changeOverload(-TREE_OVERLOAD_MAX_TRANSFER);

      return true;
    }

    var leftBlock = this.getLeftBlock();
    var rightBlock = this.getLeftBlock();

    // sum 2 booleans - possible results: 2,1,0
    var sum = leftBlock.tree + rightBlock.tree;

    if(sum){
      leftBlock.changeOverload(TREE_OVERLOAD_MAX_TRANSFER / sum * leftBlock.tree);
      rightBlock.changeOverload(TREE_OVERLOAD_MAX_TRANSFER / sum * rightBlock.tree);

      this.changeOverload(-TREE_OVERLOAD_MAX_TRANSFER);
    }
  }

  energyProcess(){
    this.energy += this.energyProduction;
    this.energy -= this.energyConsumption;

    if(this.energy <= 0){
      this.destroy();
      return false;
    }
  }

  changeEnergy(energy){
      this.energy += energy;
  }

  changeOverload(overload){
      this.overload += overload;
  }

  energyTransfer(){
    var coords = [{x: this.x, y: this.y + 1},
                 {x: this.x - 1, y: this.y},
                 {x: this.x + 1, y: this.y},
                 {x: this.x, y: this.y - 1}]

    var i = coords.length;
    while(i--){
        let block = mapController.getBlock(coords[i].x, coords[i].y);

        if(block.tree){
            let diff = (block.energy - this.energy) / 2;

            if(diff > TREE_ENERGY_MAX_TRANSFER){
              diff = TREE_ENERGY_MAX_TRANSFER;
            }
            else if(diff < -TREE_ENERGY_MAX_TRANSFER){
              diff = -TREE_ENERGY_MAX_TRANSFER;
            }

            this.changeEnergy(diff);
            block.changeEnergy(-diff);
        }
    }
  }

  checkUpForGrowingLeaves(){
    if(this.energy > LEAVES_CREATION_ENERGY_COST){
      var upBlock = mapController.getBlock(this.x, this.y + 1);
      if(upBlock.type == 'air'){
        this.energy -= LEAVES_CREATION_ENERGY_COST;
        mapController.changeBlockByTypeAndCoords(this.x, this.y + 1, new LeavesBlock());
      }
    }
  }
}
