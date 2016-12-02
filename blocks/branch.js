class BranchBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'branch';
    this.type = 'branch';
    this.transparent = true;

    this.tree = true;

    this.energy = BRANCH_STARTING_ENERGY;
    this.energyProduction = BRANCH_ENERGY_PRODUCTON;
    this.energyConsumption = BRANCH_ENERGY_CONSUMPTION; 

    this.overload = BRANCH_STARTING_OVERLOAD;
    this.overloadCreation = BRANCH_OVERLOAD_CREATION;
    this.overloadReduction = BRANCH_OVERLOAD_REDUCTION;

  }

	active(){
    super.active();

	  this.checkUpForGrowingLeaves();
    this.checkForTransformateIntoLog();
  }

  checkForTransformateIntoLog(){
    if(this.energy > BRANCH_UPDATE_ENERGY_NEED && this.overload > BRANCH_UPDATE_OVERLOAD_NEED){
      mapController.changeBlockByTypeAndCoords(this.x, this.y, new LogBlock());
    }
  }
}
