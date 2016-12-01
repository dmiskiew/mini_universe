class TreeBase extends BlockBase{
  constructor(){
    super(...arguments);
    this.tree = true;
  }

  active(){
    this.energyProcess();
    this.energyTransfer();
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
            this.changeEnergy(diff);
            block.changeEnergy(-diff);
        }
    }

  }


}
