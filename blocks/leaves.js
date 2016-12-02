class LeavesBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'leaves';
    this.type = 'leaves';
    this.transparent = true;

    this.tree = true;

    this.energy = LEAVES_STARTING_ENERGY;
    this.energyProduction = LEAVES_ENERGY_PRODUCTON;
    this.energyConsumption = LEAVES_ENERGY_CONSUMPTION; 

    this.overload = LEAVES_STARTING_OVERLOAD;
    this.overloadCreation = LEAVES_OVERLOAD_CREATION;
    this.overloadReduction = LEAVES_OVERLOAD_REDUCTION;
  }

  active(){
    super.active();

    this.checkUpForGrowingLeaves();
    this.checkForTransformateIntoBranch();
  }

  checkForTransformateIntoBranch(){
    if(this.energy > LEAVES_UPDATE_ENERGY_NEED && this.overload >LEAVES_UPDATE_OVERLOAD_NEED){
      mapController.changeBlockByTypeAndCoords(this.x, this.y, new BranchBlock());
    }
  }
}
